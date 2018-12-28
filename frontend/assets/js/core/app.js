
var Urls = atob(sessionStorage.getItem('ip')) + 'api', Imgurl = atob(sessionStorage.getItem('ip')); 
var date = atob(sessionStorage.getItem('date')), branchId = atob(sessionStorage.getItem('branchId'));
var userId = atob(sessionStorage.getItem('userId')); 

var auth = atob(sessionStorage.getItem('auth')); 
    headers = {"Authorization": "Bearer " + auth};

    var myApp = angular.module('myApp', /*['firebase'],*/ []);
        
        myApp.run(function($rootScope) {
            $rootScope.date = new Date(date);
            $rootScope.Limit = 10;
            $rootScope.ImageUrl = Imgurl+"Files";
            // var chat = new firebase('');
            // $rootScope.chats = $firebase(chat);
        });

        myApp.filter('capitalize', function() {
            return function(input, all) {
              var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
              return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
            }
        });

        myApp.controller('logincontroller', function($scope, $http) {
            $scope.login = function() {
                $http.post( Urls+"/Login/",JSON.stringify($scope.log)).then(function(response) {
                    $scope.reg = response.data; 
                  displayMsg("success","Access Granted","Welcome "+$scope.reg.FullName+" Login date: "+ new Date($scope.reg.SessionDate));
                    sessionStorage.setItem('userId', btoa($scope.reg.User.UserId));
                    sessionStorage.setItem('auth', btoa($scope.reg.Access_Token));
                    sessionStorage.setItem('date', btoa($scope.reg.Date));
                    setInterval(function(){ window.location.href = "dashboard" }, 1000);
                }, function(response) { 
                    displayMsg('warning', 'Not Successfull', response.statusText+': '+response.data);
                });
            };
            $scope.forgetpassword = function() {
                $http.post( Urls+"/Reset/",JSON.stringify($scope.log),{headers: headers}).then(function(response) {
                    $scope.reg = response.data; console.log(response); 
                    displayMsg("success", "Reset Successfull", "Check Your Mail For Confirmation ");
                    setInterval(function(){ window.location.href = "Login" }, 1000);
                }, function(response) { 
                    displayMsg('warning', 'Not Successfull', response.statusText+': '+response.data);
                });
            };
            $scope.register = function() {
                var pass = $('#Image').get(0).files; var  stype = 'User';
                $scope.regis.AppUser.Image = fileUpload(stype, pass); 
                $http.post( Urls+"/App/Register/",JSON.stringify($scope.regis),{headers: headers}).then(function(response) {
                    $scope.reg = response.data; console.log(response);
                    displayMsg('success', 'Register', $scope.reg.Output); 
                    setInterval(function(){ window.location.href = "Login"}, 1000);
                }, function(response) { 
                    displayMsg('warning', 'Not Successfull', response.statusText+': '+response.data);
                });
            };
        }); 

        //Current User Controller
        myApp.controller('usercontroller', function($scope, $http) {
            // if(sessionStorage.getItem('userId') == null){ sessionStorage.clear(); window.location.href = "login"}
            $http.get(Urls+"/Users/"+userId, {headers: headers}).then(function (response) {
                $scope.user = response.data; $scope.Img = Imgurl+'/User/';
            }, function(response) { 
                toastr.warning(response.statusText+': '+response.data+' Not Successfull','User Details');
                checkStatus(response.status); 
            });
            $scope.changepassword = function() {
                $http.post( Urls+"/Changepassword/",JSON.stringify($scope.chp),{headers: headers}).then(function(response) {
                    $scope.rest = response.data; 
                    $scope.chp.OldPassword = ''; $scope.chp.NewPassword = ''; $('.Close').click();
                    displayMsg("success", "Changed Successfull", "Password Has Been Changed Successfully");
                }, function(response) { 
                    displayMsg('warning', 'Not Successfull', response.statusText+': '+response.data);
                });
            };
            $scope.upload = function() {
                var pass = $('#Passport').get(0).files; var ptype = 'User';
                $scope.up={AppUserId: userId}; $scope.up.ProfileImage = fileUpload(ptype, pass);
                $http.post( Urls+"/Profile/",JSON.stringify($scope.up),{headers: headers}).then(function(response) {
                    $scope.rest = response.data;  
                    $scope.dash.AppUser.Image = $scope.up.ProfileImage; $('.Close').click();
                    displayMsg("success", "Changed Successfull", "profile Image Has Been Changed Successfully");
                }, function(response) { 
                    displayMsg('warning', 'Not Successfull', response.statusText+': '+response.data);
                });
            };
            $scope.logout = function(user) {
                $http.get( Urls+"/Out/"+user,{headers: headers}).then(function(response){
                    $scope.reg = response.data; 
                    displayMsg("success", 'logOut Successfull', 'You have been Logout Successfully');
                    sessionStorage.clear(); window.location.href = "Login";
                }, function(response) { 
                    displayMsg("success", 'logOut Successfull', 'You have been Logout Successfully');
                    sessionStorage.clear(); window.location.href = "Login";
                });
            };
        });

        //Settings Controllers
        //User Manager
        myApp.controller('usersmanager', function($scope, $http) {
            $http.get(Urls+"/Users/", {headers: headers}).then(function (response) {
                $scope.users = response.data;
                $('.DataList tbody').trigger('footable_initialize');
            }); 
            $http.get(Urls+"/BranchDetails/", {headers: headers}).then(function (response) {
                $scope.branchs = response.data;
            });
            $scope.postuser = function() {
                $scope.user.CreatedUserId = userId; $scope.user.CreatedDate = date;
                var pass = $('#Passport').get(0).files, ptype = 'User'; $scope.user.Passport = fileUpload(ptype, pass); 
                $http.post( Urls+"/Users/",JSON.stringify($scope.user),{headers: headers}).then(function(response) {
                    $scope.res = response.data; displayMsg('success', 'User Added', $scope.res.Output); 
                    $scope.users.push($scope.res.Data);
                }, function(response) { 
                    toastr.warning(response.statusText+': '+response.data,'Not Successfull');
                });
            };
            $scope.edituser = function(id) {
                $scope.hideform = true; $scope.add = true;
                if (id == 'new') {
                    $scope.edit = false;
                    $scope.user = {CreatedUserId: userId};
                }else{
                    $scope.edit = true;
                    angular.forEach($scope.users, function (value, key) {
                        if(value.UserId == id){                            
                            var d = new Date(value.DateOfBirth);
                            value.DateOfBirth = d.toLocaleDateString();
                            $scope.user = value;
                        }
                    });
                }
            };
            $scope.putuser = function(id) {
                $scope.user.ModifiedUserId = userId; $scope.user.ModifiedDate = date;
                var pass = $('#Passport').get(0).files, ptype = 'Passport', pic = fileUpload(ptype, pass);
                if(pic.toLowerCase() != 'file not selected'){$scope.user.Passport = pic}
                $http.put( Urls+"/Users/"+id,JSON.stringify($scope.user),{headers: headers}).then(function(response) {
                    $scope.res = response.data; console.log(response);
                    displayMsg('success', 'User Updated',"User Profile Updated Successfully"); 
                    setInterval(function(){ window.location.reload() }, 1000);
                }, function(response) { 
                    toastr.warning(response.statusText+': '+response.data,'Not Successfull'); 
                });
            };
        });
        //Branch Controller
        myApp.controller('nominalctrl', function($scope, $http) {
            $http.get(Urls+"/MainNominals/", {headers: headers}).then(function (response) {
                $scope.mains = response.data;
            });
            $http.get(Urls+"/Nominals/", {headers: headers}).then(function (response) {
                $scope.nominals = response.data;
                $('.DataList tbody').trigger('footable_initialize');
            });
            $scope.postnom = function() {
                $scope.nom.CreatedUserId = userId; $scope.nom.CreatedDate = date;
                $http.post( Urls+"/BranchDetails/",JSON.stringify($scope.nom),{headers: headers}).then(function(response) {
                    $scope.resp = response.data; $scope.nominals.push($scope.resp);
                    displayMsg('success', 'Added', 'Nominal Added Successfully'); 
                }, function(response) { 
                    toastr.warning(response.statusText+': '+response.data,'Not Successfull');
                });
            };
            $scope.postmain = function() {
                $scope.main.CreatedUserId = userId; $scope.main.CreatedDate = date;
                $http.post( Urls+"/BranchDetails/",JSON.stringify($scope.main),{headers: headers}).then(function(response) {
                    $scope.resp = response.data; $scope.mains.push($scope.resp);
                    displayMsg('success', 'Added', 'Nominal Class Added Successfully'); 
                }, function(response) { 
                    toastr.warning(response.statusText+': '+response.data,'Not Successfull');
                });
            };
            $scope.editnom = function(id) {
                $scope.hideform = true; $scope.add = true; $scope.nomform = false; $scope.mainform = false; 
                if (id == 'new') {
                    $scope.edit = false; $scope.nomform = true;
                    $scope.nom = {CreatedUserId: userId, CreatedDate: date};
                }else if (id == 'main') {
                    $scope.edit = false; $scope.mainform = true;
                    $scope.main = {CreatedUserId: userId, CreatedDate: date};
                }else if (id == 'list') {
                    $scope.edit = false; $scope.add = false; $scope.hideform = false;
                    $scope.main = {CreatedUserId: userId, CreatedDate: date};
                }else{
                    $scope.edit = true;
                    angular.forEach($scope.branchs, function (value, key) {
                        if(value.BranchId == id){
                            $scope.branch = value;
                        }
                    });
                }
            };
            $scope.putnom = function(id) {
                $scope.branch.ModifiedUserId = userId; $scope.branch.ModifiedDate = date;
                $http.put( Urls+"/BranchDetails/"+id,JSON.stringify($scope.branch),{headers: headers}).then(function(response){
                    $scope.resp = response.data; console.log(response);
                    displayMsg('success', 'Branch Updated', "Branch Updated Successfully"); 
                    setInterval(function(){ window.location.reload() }, 1000);
                }, function(response) { 
                    toastr.warning(response.statusText+': '+response.data,'Not Successfull');
                });
            };
        });
        //Branch Controller
        myApp.controller('roomsctrl', function($scope, $http) {
            $http.get(Urls+"/BranchDetails/", {headers: headers}).then(function (response) {
                $scope.branchs = response.data;
                $('.DataList tbody').trigger('footable_initialize');
            });
            $scope.postbranch = function() {
                $scope.branch.CreatedUserId = userId; $scope.branch.CreatedDate = date;
                $http.post( Urls+"/BranchDetails/",JSON.stringify($scope.branch),{headers: headers}).then(function(response) {
                    $scope.resp = response.data; $scope.branchs.push($scope.resp.Data);
                    displayMsg('success', 'Branch Added', 'Branch Added Successfully'); 
                }, function(response) { 
                    toastr.warning(response.statusText+': '+response.data,'Not Successfull');
                });
            };
            $scope.editbranch = function(id) {
                $scope.hideform = true; $scope.add = true;
                if (id == 'new') {
                    $scope.edit = false;
                    $scope.branch = {CreatedUserId: userId, CreatedDate: date};
                }else{
                    $scope.edit = true;
                    angular.forEach($scope.branchs, function (value, key) {
                        if(value.BranchId == id){
                            $scope.branch = value;
                        }
                    });
                }
            };
            $scope.putbranch = function(id) {
                $scope.branch.ModifiedUserId = userId; $scope.branch.ModifiedDate = date;
                $http.put( Urls+"/BranchDetails/"+id,JSON.stringify($scope.branch),{headers: headers}).then(function(response){
                    $scope.resp = response.data; console.log(response);
                    displayMsg('success', 'Branch Updated', "Branch Updated Successfully"); 
                    setInterval(function(){ window.location.reload() }, 1000);
                }, function(response) { 
                    toastr.warning(response.statusText+': '+response.data,'Not Successfull');
                });
            };
        });
        //Smslogs Manager
        myApp.controller('smslogctrl', function($scope, $http) {
            $http.get(Urls+"/AppLogs/User/"+userId, {headers: headers}).then(function (response) {
                $scope.smslog = response.data;
            }, function(response) { 
                displayMsg('warning', 'Not Successfull', response.statusText+': '+response.data);
                checkStatus(response.status);
            });
            $scope.count = limit; 
            $scope.load = function() {
                $scope.page++;
                $scope.count = limit * $scope.page; 
            };
            $scope.retry = function(id) {
                $http.get( Urls+"/AppLogs/Retry/"+id,{headers: headers}).then(function(response){
                    $scope.resp = response.data; //console.log(response);
                    displayMsg('success', 'Successfully', "Message Resented Successfully");
                }, function(response) { 
                    displayMsg('warning', 'Not Successfull', response.statusText);
                });
            };
        });

        myApp.controller('customersctrl', function($scope, $http) {
            $http.get(Urls+"/Customer/", {headers: headers}).then(function (response) {
                $scope.custs = response.data;
            });
            $scope.postcorp = function() {
                $scope.corp.CreatedUserId = UserId; $scope.corp.CreatedDate = date;
                $http.post( Urls+"/Corporates/",JSON.stringify($scope.ind),{headers: headers}).then(function(response) {
                    $scope.ind = response.data; console.log(response);
                    displayMsg('success', 'Customer Added', $scope.reg.Output); 
                    setInterval(function(){ window.location.reload(); }, 1000);
                }, function(response) { 
                    displayMsg('warning', 'Not Successfull', response.statusText+': '+response.data);
                });
            };
            $scope.editcust = function(id) {
                $scope.hideform = true; $scope.add = true;
                if (id == 'new') {
                    $scope.edit = false;
                    $scope.cust = {CreatedUserId: userId};
                }else if (id == 'list') {
                    $scope.hideform = false; $scope.add = false; $scope.edit = false;
                }else{
                    $scope.edit = true;
                    angular.forEach($scope.cust, function (value, key) {
                        if(value.CustomerId == id){                            
                            value.DateOfBirth = new Date(value.DateOfBirth);
                            value.DateOfWedding = new Date(value.DateOfWedding);
                            $scope.cust = value;
                        }
                    });
                }
            };
            $scope.putcorp = function() {
                $scope.corp.ModifiedUserId = UserId; $scope.corp.ModifiedDate = date;
                $http.put( Urls+"/Corporates/",JSON.stringify($scope.ind),{headers: headers}).then(function(response) {
                    $scope.ind = response.data; console.log(response);
                    displayMsg('success', 'Customer Updated', $scope.reg.Output); 
                    setInterval(function(){ window.location.reload();}, 1000);
                }, function(response) { 
                    displayMsg('warning', 'Not Successfull', response.statusText+': '+response.data);
                });
            };
        });

        myApp.controller('tellerctrl', function($scope, $http) {
            $http.get(Urls+"/Users/", {headers: headers}).then(function (response) {
                $scope.users = response.data; console.log($scope.clist);
            });
            $http.get(Urls+"/GeneralLedgerCodes/", {headers: headers}).then(function (response) {
                $scope.glcode = response.data; console.log($scope.clist);
            });
            $http.get(Urls+"/AccountTransaction/", {headers: headers}).then(function (response) {
                $scope.tellers = response.data; console.log($scope.clist);
            });
            $scope.posttel = function() {
                $scope.tel.CreatedUserId = userId; $scope.tel.CreatedDate = date;
                var pass = $('#Passport').get(0).files, ptype = 'User'; $scope.tel.Passport = fileUpload(ptype, pass); 
                $http.post( Urls+"/Tellers/",JSON.stringify($scope.tel),{headers: headers}).then(function(response) {
                    $scope.res = response.data; displayMsg('success', 'User Added', $scope.res.Output); 
                    $scope.tellers.push($scope.res.Data);
                }, function(response) { 
                    toastr.warning(response.statusText+': '+response.data,'Not Successfull');
                });
            };
            $scope.edittel = function(id) {
                $scope.hideform = true; $scope.add = true;
                if (id == 'new') {
                    $scope.edit = false;
                    $scope.tel = {CreatedUserId: userId};
                }else{
                    $scope.edit = true;
                    $http.get( Urls+"/Tellers/"+id,{headers: headers}).then(function(response) {
                        $scope.tel = response.data;
                        toastr.success(response.statusText+': '+response.data,'Successfull');
                    }, function(response){ 
                        toastr.warning(response.statusText+': '+response.data,'Not Successfull');
                    });
                }
            };
            $scope.puttel = function(id) {
                $scope.tel.ModifiedUserId = userId; $scope.tel.ModifiedDate = date;
                $http.put( Urls+"/Users/"+id,JSON.stringify($scope.tel),{headers: headers}).then(function(response) {
                    $scope.res = response.data; console.log(response);
                    displayMsg('success', 'Teller Updated',"User Profile Updated Successfully"); 
                    setInterval(function(){ window.location.reload() }, 1000);
                }, function(response){ 
                    toastr.warning(response.statusText+': '+response.data,'Not Successfull'); 
                });
            };
        });

        myApp.controller('cashmovement', function($scope, $http) {
            $http.get( Urls+"/GeneralLedgerCode/", {headers: headers}).then(function (response){
                $scope.glcode = response.data;
            });
            $scope.cal = {}; $scope.cash = {BranchId: branchId};
            $scope.from =function(value){
                $http.get( Urls+"/GlBalance/"+value, {headers: headers}).then(function (response){
                    $scope.cal.FBalBfore = response.data; 
                    $scope.cal.FBalAfter = parseInt($scope.cal.FBalBfore) - parseInt($scope.cash.Amount);
                });
            };
            $scope.to =function(value){
                $http.get( Urls+"/GlBalance/"+value, {headers: headers}).then(function (response) {
                    $scope.cal.SBalBfore = response.data;
                    $scope.cal.SBalAfter = parseInt($scope.cal.SBalBfore) + parseInt($scope.cash.Amount);
                });
            };
            $scope.transfer =function(){
                $http.post( Urls+"/TellerTransfer/",JSON.stringify($scope.cash),{headers: headers}).then(function (response) {
                    $scope.resp = response.data;
                    displayMsg("success", 'Successfull', $scope.resp);
                    setInterval(function(){ window.location.reload() }, 2000);
                });
            }
        });
        
        myApp.controller('cashierdaybook', function($scope, $http) {
            $http.get( Urls+"/GeneralLedgerCode/", {headers: headers}).then(function (response){
                $scope.glcode = response.data;
            });
            $scope.cal = {}; $scope.cash = {BranchId: branchId}
            $scope.daybook = function(){
                $http.post( Urls+"/TellerTDayBook/",JSON.stringify($scope.cash),{headers: headers}).then(function (response) {
                    $scope.resp = response.data;
                    displayMsg("success", 'Successfull', $scope.resp);
                    setInterval(function(){ window.location.reload() }, 2000);
                });
            }
        });

    function displayMsg(type, title, text){
        var type = type, title = title, text = text;
        swal({
            title: title,
            text: text,
            type: type
        });
    }

    function fileUpload(type, file){
        var name, fil = file; var seq = type; 
        var data = new FormData();
        //console.log(seq); console.log(fil);
        if (fil.length > 0) {
           data.append("file", fil[0]);
        }
        $.ajax({
            type: "POST",
            url: baseUrl +"/Upload/"+ seq,
            contentType: false,
            processData: false,
            async: false,
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Authorization' : 'Bearer ' + auth
            },
            data: data,
            success: function(jqXHR) {
                name = jqXHR;
                //console.log(jqXHR);
            },
        });
      return name;
    }

    function checkStatus(status){
        switch (status) {
            case 401:
                {
                    toastr.error('Invalid Access Token, You are Unauthorized to Access this Application','Unauthorized User');
                    sessionStorage.clear();
                    window.location.href = "Login";
                    break;
                };
            case 500:
                {
                    console.log(status);
                    break;
                };
            case 501:
                {
                    toastr.error('This you are looking for doesnt exist in this Application','Not Found');
                    console.log(status);
                    break;
                };
            case 404:
                {
                    toastr.error('This you are looking for doesnt exist in this Application','Internal Server Error');
                    console.log(status);
                    break;
                };
            case -1:
                {
                    toastr.error('Unable To get Data, Please Check Your internet Connection','Connection Error');
                    break;
                };
            }
    }

    // angular.forEach($scope.jnts, function(val, key){
                //     var cust ='', phone= ''; gender= ''; var Ind = val.JointCustomersKeys;
                //     angular.forEach(Ind, function(value, key){
                //         cust += value.Individual.Title+' '+value.Individual.FirstName+' '+value.Individual.LastName +' || ';
                //         phone += value.Individual.Mobile +', '; gender += value.Individual.Gender +', ';
                //     });
                //     $scope.js = {JointId: val.JointId, JointNumber: val.JointNumber, Name: cust, Phone: phone, Gender: gender};
                //     $scope.joints.push($scope.js); console.log($scope.joints);
                // });

