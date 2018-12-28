"use strict"; 

var base = atob(sessionStorage.getItem('ip')), baseUrl =  base+"api/"; 
var branchId = atob(sessionStorage.getItem('branchId')); 
var userId = atob(sessionStorage.getItem('userId')); var bUrl = atob(sessionStorage.getItem('ip'));
var auth = atob(sessionStorage.getItem('auth')); var uname = atob(sessionStorage.getItem('username'));

var pathArray = window.location.pathname.split( '/' ); //console.log(pathArray);
var Case = location.pathname.split('/').slice(-1)[0]; //console.log(Case);
var Case1 = location.pathname.split('/').slice(-2)[0]; //console.log(Case1);

var loc = Case.split('.').slice()[0];

$(document).ready(function() {
    //console.log(loc);
    if (loc != 'Login') { 
        //console.log('getSession');
        // getSession();
    }else{
        //checkAccess(userId, loc);
    }
    //siteController(loc); 
    var i;
    for (i = 0; i < pathArray.length; i++) {
      if(pathArray[i] !== ""){ $('.'+pathArray[i]).addClass('active'); }
    }
});

function siteController(Rout){
    switch (Rout) {
        case "Dashboard":
            {

                break;
            };
        case "Individual":
            {
                getIndividual();
                break;
            };
        case "Corporate":
            {
                getCorporate();
                break;
            };
        case "Joint":
            {
                getJoint();
                break;
            };
        case "Customer":
            {
                getCustomers();
                hidden();
                break;
            };
        case "Account":
            {
                getAccount()
                break;
            };
        case "Cheque":
            {
                getAccountCheques();
                getIssuedCheque();
                hidden();
                break;
            };
        case "Setup-Account":
            {
                getAccountTypes();
                getLedger();
                break;
            };
        case "Lien":
            {
                getLiens();
                break;
            };
        case "Overdraft":
            {
                getOverdraft();
                break;
            };
        case 'Cashier':
            {
                Cashier();
                tellerLogin();
                break;
            };
        case 'Vouchers':
            {
                Cashier();
                tellerLogin();
                break;
            };
        case 'Placement':
            {
                getAccount();
                break;
            };
        case 'Summary':
            {
                getCashierSum();
                break;
            };
        case "Users":
            {
                getUsers();
                break;
            };
        case "Tellers":
            {
                getTeller();
                break;
            };
        case "Sequence":
            {
                getSeq();
                break;
            };
        case "Session":
            {
                getSessions();
                break;
            };
        case "Nominal":
            {
                getNominal();
                break;
            };
        case "Cot":
            {
                getCot();
                break;
            };
        case "Branch":
            {
                getBranch();
                break;
            };
        case "Bank":
            {
                getBank();
                break;
            };
        case "Approval":
            {
                getApproval();
                hidden();
                break;
            };
        case "Approvals":
            {
                getApprovals();
                break;
            };
        case "Setup":
            {
                setupController(Case1);
                break;
            }
        }
}

function setupController(value){
    switch (value) {
        case "Users":
            {
                getUsers();
                break;
            };
        case "Teller":
            {
                getTeller();
                break;
            };
        case "Account":
            {
                getAccountTypes();
                getLedger();
                break;
            };
        case "Customer":
            {
                getCustomerSetup();
                break;
            };
        }
};

function checkStatus(status){
    switch (status) {
        case 401:
            {
                console.log(status);
                logOut();
                break;
            };
        case 500:
            {
                console.log(status);
                break;
            };
        case 501:
            {
                console.log(status);
                break;
            }
        }
}

function hidden(){
    $('.Addform').addClass('hidden');
}

function getSession(){
    if (sessionStorage.getItem('userId') != null){
        $.ajax({
            type: 'GET',
            url: baseUrl +'Users/' + userId,
            dataType: 'json',
            headers: {
                'Authorization' : 'Bearer ' + auth
            },
            success: function(data){
                $('#userfullname').html(data.FirstName + " " + data.LastName); 
                $('#usertype').html(data.Type); 
                $('.uname').val(data.Username);
                $('#UserPic').attr("src", bUrl+"Files/User/"+data.ImageFile);
                sessionStorage.setItem('userId', btoa(data.UserId));
                sessionStorage.setItem('branchId', btoa(data.BranchId));
                sessionStorage.setItem('username', btoa(data.Username));
            },
            error: function(jqXHR){
                checkStatus(jqXHR.status);
            }
        });
    }else{
        console.log('redirecting');
        window.location.href = "Login";
        //setInterval(function(){ window.location.href = "Login" }, 0);
    }
}

function getCashierSum(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'AccountTransaction',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) { console.log(data);
            var no =1, t = 0;
             $('.Cashier tbody').html('');
            $('.Cashier').footable();
            $.each(data, function(key, value) {
                var b=value.Balance; t = t + value.Balance;
                $('.Cashier tbody').append('<tr><td>'+no+'</td><td>'+value.CashierName+'</td><td>'+ value.BranchName +'</td><td>'+ value.UserName +'</td><td>'+value.Transactions+'</td><td>'+ 'GHC ' + b.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") +'</td></tr>');
                no++;
            });
            $('#Total').val('GHC ' + t.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            // $('.Cashier tbody').trigger('footable_initialize');
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getIndividual(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'Individuals',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            var indList = $('#Individual').DataTable();

            $.each(data, function(key, value) {
                indList.row.add( [ value.CustomerNumber, value.Title + " " + value.FirstName + " " + value.LastName + " " + value.OtherName , value.Mobile, value.Gender, '<a onclick="viewInd('+ value.IndividualCustId +')" class="btn btn-xs btn-primary">View</a><a onclick="editInd('+ value.IndividualCustId +')" class="btn btn-xs btn-warning">Edit</a>'] ).draw(false)
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getCorporate(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'Corporates',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            var corpList = $('#Corporate').DataTable();

            $.each(data, function(key, value) {
                corpList.row.add( [ value.CorporateNumber, value.CompanyName, value.NatureOfBusiness , value.CompanyPhone, '<a onclick="asignCorp('+value.CorporateCustId+')" class="btn btn-xs btn-success">Add</a><a onclick="viewCorp('+value.CorporateCustId+')" class="btn btn-xs btn-primary">View</a><a onclick="editCorp('+value.CorporateCustId+')" class="btn btn-xs btn-warning">Edit</a>' ] ).draw(false);
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getJoint(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'JointCustomers',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            // console.log(data), console.log(data["0"].JointCustomersKeys); 
            var jointList = $('#JointCustomer').DataTable();
            $.each(data, function(key, val) {
                var cust ='', phone= ''; gender= ''; var Ind = val.JointCustomersKeys;
                $.each(Ind, function(key, value) {
                    cust += value.Individual.Title+' '+value.Individual.FirstName+' '+value.Individual.LastName +' || ';
                    phone += value.Individual.Mobile +', '; gender += value.Individual.Gender +', ';
                });
                    //console.log(cust); console.log(phone);
                jointList.row.add( [ val.JointNumber, cust, phone , gender, '<a onclick="viewJoint('+val.JointId+')" class="btn btn-xs btn-primary">View</a><a onclick="editJoint('+val.JointId+')" class="btn btn-xs btn-warning">Edit</a>'] ).draw(false);
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getCustomers(){
    var custList = $('#CustomersList').DataTable();
    $.ajax({
        type: 'GET',
        url: baseUrl +'Individuals',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            $.each(data, function(key, value) {
                custList.row.add( [ value.CustomerNumber, value.Title + " " + value.FirstName + " " + value.LastName + " " + value.OtherName , value.Mobile, value.Gender, 'Individual', '<a onclick="viewInd('+ value.IndividualCustId +')" class="btn btn-xs btn-primary">View</a><a onclick="editInd('+ value.IndividualCustId +')" class="btn btn-xs btn-warning">Edit</a>'] ).draw(false)
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
    $.ajax({
        type: 'GET',
        url: baseUrl +'Corporates',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            $.each(data, function(key, value) {
                custList.row.add( [ value.CorporateNumber, value.CompanyName, value.CompanyPhone, value.NatureOfBusiness,  'Corporate', '<a onclick="asignCorp('+value.CorporateCustId+')" class="btn btn-xs btn-success">Add</a><a onclick="viewCorp('+value.CorporateCustId+')" class="btn btn-xs btn-primary">View</a><a onclick="editCorp('+value.CorporateCustId+')" class="btn btn-xs btn-warning">Edit</a>'] ).draw(false);
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
    $.ajax({
        type: 'GET',
        url: baseUrl +'JointCustomers',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            $.each(data, function(key, val) {
                var cust ='', phone= '', gender= ''; var Ind = val.JointCustomersKeys;
                $.each(Ind, function(key, value) {
                    cust += value.Individual.Title+' '+value.Individual.FirstName+' '+value.Individual.LastName +' || ';
                    phone += value.Individual.Mobile +', '; gender += value.Individual.Gender +', ';
                });
                custList.row.add( [ val.JointNumber, cust, phone , gender, 'Joint', '<a onclick="viewJoint('+val.JointId+')" class="btn btn-xs btn-primary">View</a>'] ).draw(false);
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getCustomerSetup(){
    var setupList = $('#Setuplist').DataTable(); var c = 1;

    $.ajax({
        type: 'GET',
        url: baseUrl +'CountryLists',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            $.each(data, function(key, val) {
                setupList.row.add( [ c, val.Name, '', val.CreatedDate, 'Country', '<a onclick="editCountry('+val.CountryId+')" class="btn btn-xs btn-warning">Edit</a>'] ).draw(false);
                c++;
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
    $.ajax({
        type: 'GET',
        url: baseUrl +'Targets',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            $.each(data, function(key, val) {
                setupList.row.add( [ c, val.Type, val.Status, val.CreatedDate, 'Target', '<a onclick="editTarget('+ val.TargetId +')" class="btn btn-xs btn-warning">Edit</a>'] ).draw(false);
                c++;
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
    $.ajax({
        type: 'GET',
        url: baseUrl +'Sectors',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            $.each(data, function(key, val) {
                setupList.row.add( [ c, val.Type, val.Status, val.CreatedDate, 'Sector', '<a onclick="editSector('+val.SectorId+')" class="btn btn-xs btn-warning">Edit</a>'] ).draw(false);
                c++;
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
    $.ajax({
        type: 'GET',
        url: baseUrl +'Ratings',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            $.each(data, function(key, val) {
                setupList.row.add( [ c, val.Type, val.Status, val.CreatedDate, 'Rating', '<a onclick="editRating('+val.RatingId+')" class="btn btn-xs btn-warning">Edit</a>'] ).draw(false);
                c++;
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getAccount(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'Accounts/All',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            var account = $('#AccountsList').DataTable(); var c=1;

            $.each(data, function(key, value) {
                account.row.add( [ c, value.AccountNumber, value.AccountName, value.BaseType, value.TotalBalance , value.AvailableBalance, '<a href="# onclick="viewAcct('+value.AccountId+')" class="btn btn-xs btn-primary">View</a><a onclick="editAcct('+value.AccountId+')" class="btn btn-xs btn-warning">Edit</a>' ] ).draw(false);
                c++;
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getBranch(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'BranchDetails',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            var branch = $('#Branchs').DataTable();
            $.each(data, function(key, val) {
                branch.row.add( [ val.BranchName, val.BranchCode, val.TelephoneNumber, val.PostalAddress, val.District, val.Region, '<a onclick="editBranch('+val.BranchId+')" class="btn btn-xs btn-warning">Edit</a>' ] ).draw(false);
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getBank(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'BankDetails',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            var branch = $('#Banks').DataTable();
            $.each(data, function(key, val) {
                branch.row.add( [ val.CompanyName, val.PostalAddress, val.Logo, val.DatabaseId, val.ActFile, '<a onclick="editBank('+val.BankDetailsId+')" class="btn btn-xs btn-warning">Edit</a>' ] ).draw(false);
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getApprovals(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'Accounts/All',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){ //console.log(data);
            var account = $('#AcctsList').DataTable();
            $.each(data, function(key, value) {
                if(value.AccountStatus === "INACTIVE"){  
                    // account.row.add( [ value.AccountNumber,value.AccountName,value.AccountType,value.BaseType,value.AccountStatus,value.PurposeId,'<a onclick="viewAcct('+value.AccountId+')" class="btn btn-xs btn-info">View</a><a onclick="approveAcct('+value.AccountId+')" class="btn btn-xs btn-primary">Approve</a>' ] ).draw(false);
                }
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
    $.ajax({
        type: 'GET',
        url: baseUrl +'IssuedCheques',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) { console.log(data);
            var no =1, issuedList = $('#IssuedCheques').DataTable();
            $.each(data, function(key, value) {
                var acctno = value.Account.AccountNumber;
                var sta = value.Status, action = '';
                if(value.Status === 'Pending'){
                action ='<a onclick="aproCheque('+value.IssuedChequeBookId+')" class="btn btn-xs btn-primary">Approve</a>';
                issuedList.row.add( [ no,value.StartNumber,value.EndNumber,acctno,value.Status, action ] ).draw( false );
                no++;
                }
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
    $.ajax({
        type: 'GET',
        url: baseUrl +'Transcodeitems/Pending',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) { //console.log(data);
            var no =1, cheque = $('#Transactions').DataTable();
            $.each(data, function(key, value) { console.log(value);
                //var acctno = value.Account.AccountNumber; 
                var Amount = 0;
                if(value.Credit != 0){ Amount = value.Credit; }else{ Amount = value.Debit; }
                cheque.row.add( [ no, value.AccountId, ' ', value.TransSource, Amount, value.Reference,'<a onclick="approvecheq('+value.TransCodeItemsId+')" class="btn btn-xs btn-primary">Approve</a>'] ).draw( false );
                no++;
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getCot(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'Banktiers',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            var corpList = $('#Banktiers').DataTable(); var c=1;

            $.each(data, function(key, value) {
                corpList.row.add( [ c, value.Name, value.Description, value.Type, value.GeneralLedgerCodeId, '<a onclick="editCot('+value.BanktiersId+')" class="btn btn-xs btn-warning">Edit</a><a onclick="deleteCot('+value.BanktiersId+')" class="btn btn-xs btn-danger">Delete</a>' ] ).draw(false);
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getApproval(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'ApprovalRules',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            var appoval = $('#Approvalrule').DataTable(); var c=1;
            $.each(data, function(key, val) {
                appoval.row.add( [ c, val.Type, val.ApproversUserIds, val.Level, val.MinimumAmount, val.MaximumAmount, '<a onclick="editApproval('+val.ApprovalRulesId+')" class="btn btn-xs btn-warning">Edit</a>' ] ).draw(false);
                c++;
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getNominal(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'GeneralLedgerCode',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            var glcode = $('#Glcodes').DataTable(); var c=1;

            $.each(data, function(key, value) {
                glcode.row.add( [ c, value.SubCode, value.GLType, value.Description, value.BalanceType , '<a onclick="editAcct('+value.GeneralLedgerCodeId+')" class="btn btn-xs btn-warning">Edit</a>' ] ).draw(false);
                c++;
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getOverdraft(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'Overdraft/',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            var draft = $('#OverdraftList').DataTable(); var c=1;

            $.each(data, function(key, value) {
                var appove = ''
                if (value.Status === "Active"){ appove = '<a onclick="approveDraft('+value.OverdraftId+')" class="btn btn-xs btn-primary">Approve</a>' }
                draft.row.add( [ c, value.OverdraftNumber, value.Type, value.Amount, value.StartDate, value.EndDate , value.Status, appove +'<a onclick="editDraft('+value.OverdraftId+')" class="btn btn-xs btn-warning">Edit</a>' ] ).draw(false);
                c++;
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getSessions(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'Sessions/',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            var session = $('#Sessionlist').DataTable(); var c=1;
            $.each(data, function(key, value) {
                var close = ''
                if (value.Status === "Active"){ 
                    close = '<a onclick="closeSession('+value.SessionManagerId+')" class="btn btn-xs btn-danger">Close</a>' 
                }
                session.row.add( [ c, value.BranchName, value.SessionDate, value.Status, value.ClosedDate, close+'<a onclick="editSession('+value.SessionManagerId+')" class="btn btn-xs btn-warning">Edit</a>' ] ).draw(false);
                c++;
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getAccountCheques(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'Cheque',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) {
            $('#ClearedList').html(''); $('#DelinList').html(''); 
            var no =1, c=1,d=1; var cheque = $('#Cheqlist').DataTable(); console.log(data);
            $.each(data, function(key, value) {
                var acctno = value.Account.AccountNumber, stat = value.Status; //console.log(stat.toLowerCase());
                if(stat.toLowerCase() === "cleared"){ //console.log(value.Account.AccountNumber);
                    cheque.row.add( [ no, value.ChequeNumber, acctno, value.ChequeAmount, value.Status, '<a><i class="fa fa-check text-navy"></i></a>'] ).draw( false );
                    $('#ClearedList').append('<tr><td>'+c+'</td><td>'+value.ChequeNumber+'</td><td>'+acctno+'</td><td>'+ value.ClearedDate +'</td><td>'+value.ChequeAmount+'</td><td><a><i class="fa fa-check text-navy"></i></a></td></tr>');
                    c++;
                }else if(stat.toLowerCase() === "declined"){
                    cheque.row.add( [ no, value.ChequeNumber, acctno, value.ChequeAmount, value.Status, '<a><i class="fa fa-exclamation text-danger"></i></a>'] ).draw( false );
                    $('#DelinList').append('<tr><td>'+d+'</td><td>'+value.ChequeNumber+'</td><td>'+ acctno +'</td><td>'+ value.ClearedDate +'</td><td>'+ value.ChequeAmount +'</td><td><a><i class="fa fa-exclamation text-navy"></i></a></td></tr>');
                    d++;
                }else if(stat.toLowerCase() === "pending"){
                    cheque.row.add( [ no, value.ChequeNumber, acctno, value.ChequeAmount, value.Status, '<a onclick="clearChe('+value.ChequeId+')" class="btn btn-xs btn-success">Clear</a><a onclick="delineChe('+value.ChequeId+')" class="btn btn-xs btn-danger">Deline</a>'] ).draw( false );
                }
                no++;
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getIssuedCheque(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'IssuedCheques',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) {
            var no =1, issuedList = $('#IssuedCheques').DataTable();
            $.each(data, function(key, value) {
                var acctno = value.Account.AccountNumber; //console.log(value.Account.AccountNumber)
                var sta = value.Status, action = '';
                if(sta != 'Pending'){
                    action = '<a><i class="fa fa-check text-navy"></i></a>';
                }else{
                    action='<a onclick="editCheque('+value.IssuedChequeBookId+')" class="btn btn-xs btn-warning">Edit</a>';
                }
                issuedList.row.add( [ no,value.StartNumber,value.EndNumber,acctno,value.Status, action ] ).draw( false );
                no++;
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getTeller(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'AccountTransaction',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) {
            var no =1;
            var tellerList = $('#Tellers').DataTable();
            $.each(data, function(key, value) {
                var w = value.WithDrawalLimit, l = 'GHC ' + w.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                var d = value.DepositLimit, s = 'GHC ' + d.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                    tellerList.row.add( [ no, value.UserName, btoa(value.Pin), value.CashierName, value.BranchName, l, s, '<a onclick="editTeller('+ value.TellerId +')" class="btn btn-xs btn-warning">Edit</a>  <a><i class="fa fa-check text-navy"></i></a>'] ).draw( false );
                no++;
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getUsers(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'Users',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            var seqList = $('#UserList').DataTable(); var c=1;

            $.each(data, function(key, value) {
                seqList.row.add( [ c, value.FirstName + ' ' + value.LastName, value.Username, btoa(value.Password), value.Type, '<a onclick="editUser('+ value.UserId +')" class="btn btn-xs btn-warning">Edit</a>' ] ).draw(false);
                c++;
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getSeq(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'CommonSequences',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            var seqList = $('#Sequence').DataTable(); var c=1;

            $.each(data, function(key, value) {
                seqList.row.add( [ c, value.Name, value.Counter , value.FixedLength, value.Prefix, value.Suffix, '<a onclick="editSeq('+value.CommonSequenceId+')" class="btn btn-xs btn-warning">Edit</a>' ] ).draw(false);
                c++
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function tellerLogin(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'teller/User/'+userId,
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) {
            $('#Tellername').val(data.GeneralLedgerCodeId);
            $('#tellerid').val(data.TellerId);
        },
        error: function (jqXHR) {
            //console.log(jqXHR);
        }
    });
}

function getAccountTypes(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'AccountTypes',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            var acctList = $('#AccountTypesList').DataTable(); var c=1;

            $.each(data, function(key, value) {
                acctList.row.add( [ c, value.AccountType, value.BaseType, value.CreatedDate, '<a onclick="editAcctType('+value.AccountTypeId+')" class="btn btn-xs btn-warning">Edit</a><a onclick="viewAcctType('+ value.AccountTypeId +')" class="btn btn-xs btn-primary">View</a>' ] ).draw(false);
                c++;
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getLedger(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'Ledgers',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            var legList = $('#LedgersList').DataTable(); var c=1;

            $.each(data, function(key, value) {
                legList.row.add( [ c, value.Name, value.CreatedDate, '<a onclick="editLedger('+ value.LedgerId +')" class="btn btn-xs btn-warning">Edit</a>' ] ).draw(false);
                c++;
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getLiens(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'Liens',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            var legList = $('#LedgersList').DataTable(); var c=1;

            $.each(data, function(key, value) {
                legList.row.add( [ c, value.Name, value.CreatedDate, '<a onclick="editLedger('+ value.LedgerId +')" class="btn btn-xs btn-warning">Edit</a>' ] ).draw(false);
                c++;
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getSweep(){
    $.ajax({
        type: 'GET',
        url: baseUrl +'Sweep',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data){
            var TarrifList = $('#TarrifList').DataTable(); var c=1;
            $.each(data, function(key, value) {
                TarrifList.row.add( [ c, value.StartDate, value.EndDate, value.Amount, value.Amount, value.Amount, value.Status, '<a onclick="editLedger('+ value.SweepId +')" class="btn btn-xs btn-warning">Edit</a>'] ).draw(false);
                c++;
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getCustomer(input){
    var accUrl = $("#CType :selected").text();
    $.ajax({
        type: 'GET',
        url: baseUrl + accUrl,
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data){
            $('#CustomerNo').html('');
            $('#CustomerNo').append('<option>Choose '+ accUrl +' CustomerNumber & Name..</option>');
            $.each(data, function (index, val) {
                //console.log(val);
                if(accUrl === 'Individuals'){
                    var name = val.Title +' '+ val.FirstName +' '+ val.LastName +' '+ val.OtherName;
                    $('#CustomerNo').append('<option value="'+ val.IndividualCustId +'">' + val.CustomerNumber+' '+name.toUpperCase()+' </option>')
                }else if(accUrl === 'Corporates'){
                    var name = val.CompanyName;
                    $('#CustomerNo').append('<option value="'+val.CorporateCustId+'">'+val.CorporateNumber+' '+name.toUpperCase()+' </option>')
                }else if(accUrl === 'JointCustomers'){
                    var name ='';var Ind = val.JointCustomersKeys; 
                    $.each(Ind, function(key, value) {
                        name += value.Individual.Title+' '+value.Individual.FirstName+' '+value.Individual.LastName+' || ';
                    });
                    $('#CustomerNo').append('<option value="'+val.JointId+'">'+val.JointNumber+' '+name.toUpperCase()+' </option>')
                }
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getCustDetails(input) {
    var type = $("#CType :selected").text();
    var id = $("#CustomerNo").val();

    CustDetails(type, id);
    getCustAccounts(type, id);
}

function CustDetails(type, id) {
    var accUrl = type;
    var id = id;
    $.ajax({
        type: 'GET',
        url: baseUrl + accUrl +'/'+id,
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) {
            //console.log(data);
            if(accUrl === 'Individuals'){
                    //var name = data.Title +' '+ data.FirstName +' '+ data.LastName +' '+ data.OtherName;
                $('#Names').val(data.Title +' '+ data.FirstName +' '+ data.LastName +' '+ data.OtherName);
                $('#Mobile').val(data.Mobile); $('#CustNo').val(data.CustomerNumber);
                $('#Email').val(data.Email);
                $('#RelationOfficerId').val(data.FirstAccOfficerId);
                $('#Passport').attr("src", bUrl+"Files/Pictures/"+data.Picture);
                $('#Signature').attr("src", bUrl+"Files/Signatures/"+data.Signature);

            }else if(accUrl === 'Corporates'){
                    $('#Names').val(data.CompanyName); var name = data.CompanyName;
                $('#Mobile').val(data.CompanyPhone); $('#CustNo').val(data.CorporateNumber);
                $('#Email').val(data.CompanyEmail);
                $('#RelationOfficerId').val(data.RelationalOfficer);
                $('#Passport').attr("src", bUrl+"Files/Pictures/"+data.Picture);
                $('#Signature').attr("src", bUrl+"Files/Signatures/"+data.Signature);

            }else if(accUrl === 'JointCustomers'){
                //console.log(data);
                var email= '', cust ='', phone= ''; var Ind = data.JointCustomersKeys; console.log(Ind);
                $.each(Ind, function(key, value) {
                    cust += value.Individual.Title+' '+value.Individual.FirstName+' '+value.Individual.LastName +' || ';
                    phone += value.Individual.Mobile +', '; email += value.Individual.Email +', ';
                });
                $('#Names').val(cust); $('#Mobile').val(phone); 
                $('#CustNo').val(data.JointNumber); $('#Email').val(email); 
                $('#RelationOfficerId').val(data.JointCustomersKeys[0].Individual.FirstAccOfficerId);
                $('#Passport').attr("src", bUrl+"Files/Pictures/"+data.JointCustomersKeys[0].Individual.Picture);
                $('#Signature').attr("src", bUrl+"Files/Signatures/"+data.JointCustomersKeys[0].Individual.Signature);
            }
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getAccountBalance(input) {
    var id = input, no;
    $.ajax({
        type: 'GET',
        url: baseUrl + 'Accounts/all/'+id,
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) {
            // var details = data;
            // console.log(details);
           var Acctid=data.AccountId, AccountTypeId=data.AccountTypeId, avbl=data.AvailableBalance, tbal=data.TotalBalance;
            $('#Name').val(data.AccountName); $('#AccountStatus').val(data.AccountStatus);
            $('#AccountType').val(data.AccountType); $('#CustomerNo').val(data.CustomerNumber);
            $('#TotalBalance').val('GHC ' + tbal.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            $('#AvailableBalance').val('GHC ' + avbl.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            $('#RelationOfficerId').val(data.RelationOfficerId);
        },
        error: function (jqXHR) {
            console.log(jqXHR);
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getAccountDetails(input) {
    var id = input, no;
    $.ajax({
        type: 'GET',
        url: baseUrl + 'Accounts/'+id,
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) {
            //console.log(data);
           var Acctid = data.AccountId, AccountTypeId =data.AccountTypeId, avbl =data.AvailableBalance, tbal = data.TotalBalance;
            $('#Name').val(data.AccountId); $('#AccountStatus').val(data.AccountStatus);
            $('#AccountType').val(data.AccountTypeId); $('#CustomerNo').val(data.CustomerNumber);
            $('#TotalBalance').val('GHC ' + tbal.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            $('#AvailableBalance').val('GHC ' + avbl.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            $('#RelationOfficerId').val(data.RelationOfficerId); 
            $('#Sms').prop('checked', data.TransactionAlert).iCheck('update'); 
        if(data.IndividualCustId != null){
                var type ="Individuals";
                var id = data.IndividualCustId;
                CustDetails(type, id);
                getAccountTrans(Acctid);
                getAccountTypeGL(AccountTypeId);
            }else if(data.CorporateCustId != null){
                $('#viewSign').removeClass('hidden');
                var type ="Corporates";
                var id = data.CorporateCustId; console.log(id);
                CustDetails(type, id);
                getSignatory(id);
                getAccountTrans(Acctid);
                getAccountTypeGL(AccountTypeId);
            }else if(data.JointId != null){
                var type ="JointCustomers";
                var id = data.JointId;
                CustDetails(type, id);
                getAccountTrans(Acctid);
                getAccountTypeGL(AccountTypeId);
            }
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getFdAccountDetails(input) {
    var id = input; //console.log(id);
    $.ajax({
        type: 'GET',
        url: baseUrl + 'Accounts/'+id,
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) {
            // var details = data; console.log(data);
             var ivd = formatDate(data.OpenedDate),fdmd = formatDate(data.FixedDepositMaturityDate);
            var Acctid = data.AccountId, dayold = daysOld(data.OpenedDate), dayR = daysRemain(data.FixedDepositMaturityDate); 
            var di = data.FixedDepositDailyInterest, ia = data.FixedDepositInterestAccrued, ma = data.FixedDepositMaturityAmount, pa = data.FixedDepositPrincipal, ina = data.FixedDepositInterestAmount;
            if(ia === null ){ ia = 0 }

            $('#ServicingAccount').val(data.FixedDepositServicingAccountId); $('#Name').val(data.AccountId); 
            $('#InvestmentDate').val(ivd); $('#MaturityDate').val(fdmd);$('#DaysOld').val(dayold);$('#DaysRemaining').val(dayR);
            $('#InterestRate').val(data.FixedDepositInterestRate); $('#Period').val(data.FixedDepositPeriod);
            $('#PrincipalAmount').val(pa.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            $('#InterestAccrued').val(ia.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            $('#InterestAmount').val(ina.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            $('#MaturityAmount').val(ma.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            $('#DailyInterest').val(di.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); 
            $('#SmsAlert').prop('checked', data.TransactionAlert).iCheck('update'); $('#Status').val(data.AccountStatus);
            $("#Interest").prop('checked', data.RolloverInterest).iCheck('update'); 
            $("#Principal").prop('checked', data.RolloverPrincipal).iCheck('update');
            $("#AdjustmentInterest").prop('checked', data.RolloverInterest).iCheck('update'); 
            $("#AdjustmentPrincipal").prop('checked', data.RolloverPrincipal).iCheck('update');
            $('#AdjustmentInterestRate').val(data.FixedDepositInterestRate); $('#AdjustmentPeriod').val(data.FixedDepositPeriod);
            
            $('#PrematurePrincipalAmount').val(pa.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); 
            $('#PrematureInterestAmount').val(ia.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            $('#CurrentInterestRate').val(data.FixedDepositInterestRate); 
            $('#TopupSourceAccount').val(data.FixedDepositFundingSourceAccountId);
            $('#PartialAccount').val(data.FixedDepositServicingAccountId);
            $('#PrematureDestination').val(data.FixedDepositServicingAccountId); 
            getAccountTrans(Acctid);
            // $('#TotalBalance').val('GHC ' + tbal.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            // x$('#AvailableBalance').val('GHC ' + avbl.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getSignatory(input) {
    var id = input;
    $.ajax({
        type: 'GET',
        url: baseUrl + 'CompanySignatories/Corporate/'+id,
        dataType: 'json',
        async: false,
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) {
            var no = data;
            var sign = $('.Sign').html('');
            $.each(data, function(key, val) {
            sign.append('<div class="col-lg-12"><div class="col-sm-4 b-r"><h4>'+val.Title+' '+val.FirstName+' '+val.LastName+'</h4><h5>'+val.Type+'</h5></div><div class="col-sm-4 b-r"><img style="height: 150px; width: 150px" class="img-rounded" src="'+bUrl+'Files/Pictures/'+data.Picture+'" alt="Passport Preview" /></div><div class="col-sm-4 "><img style="height: 150px; width: 150px" class="img-rounded" src="'+bUrl+'Files/Pictures/'+data.Signature+'" alt="Signature Preview" /></div></div>');
            });

        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getAcctSequence(input) {
    var id = input, no;
    $.ajax({
        type: 'GET',
        url: baseUrl + 'accounttypes/'+id,
        dataType: 'json',
        async: false,
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) {
            no = data.SequenceFormatId;
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
    return no;
}

function getCustAccounts(type, id) {
    $.ajax({
        type: 'GET',
        url: baseUrl +'Accounts/'+ type +'/'+id,
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) { //console.log(data);
            var no =1;
            $('#Accounts').html(''); $('#ServicingAccountId').html('<option>Choose Servicing Account..</option>');
            $('#SourceAccountId').html('<option>Choose Funding Source Account</option>');
            $.each(data, function(key, value) {
                var b = value.AvailableBalance;
                $('#Accounts').append('<tr><td>'+no+'</td><td>'+value.AccountName+'</td><td>'+ value.AccountNumber +'</td><td>'+ 'GHC ' + b.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") +'</td><td>'+ value.BaseType +'</td><td>'+ value.PurposeId +'</td><td>'+ value.AccountStatus +'</td></tr>');
                $('#ServicingAccountId').append('<option value="'+value.AccountId+'">'+ value.AccountNumber +'</option>');
                $('#SourceAccountId').append('<option value="'+value.AccountId+'">'+ value.AccountNumber +'</option>');
            no++;
            });
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getAccountTrans(id) {
    $.ajax({
        type: 'GET',
        url: baseUrl +'Transactions/Account/'+id,
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) {
            //data = array.reverse();
            var no =1; $('#AcctTrans').html(''); var $Trans='';
                //$('.AcctTran').footable();
                $.each(data, function(key, value) {
                    var d=value.Debit, c=value.Credit, b =value.Balance; if(b === null){b = 0};
                    if(value.LedgerType != "Nominal"){
                        $('#AcctTrans').append('<tr><td>'+no+'</td><td>'+value.SessionDate+'</td><td>'+value.TransCode+'</td><td>'+value.TransSource+'</td><td>'+value.Reference+'</td><td>'+ d.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") +'</t><td>'+ c.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") +'</td><td>'+ 'GHC ' + b.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") +'</td></tr>');
                        no++;
                    }
                });
                // $('#AcctTran').html($Trans); console.log($Trans);
            $('.AcctTran tbody').trigger('footable_initialize');
        },
        error: function (jqXHR) {
            console.log(jqXHR);
        }
    });
}

function getCheque(id) {
    var id = id;
    //console.log(id);
    $('.Clearlist').addClass('hidden');
    $('.Clearview').removeClass('hidden');
    $.ajax({
        type: 'GET',
        url: baseUrl +'/Cheque/'+id,
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) {
            //console.log(data);
            $('#ChequeNo').val(data.ChequeNumber);
            $('#ClearedDate').val(data.ClearedDate);
            $('#Amount').val(data.ChequeAmount);
            $('#AccountNo').val(data.AccountId);
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getAccountTypeGL(AccountTypeId) {
    var id = AccountTypeId;
    $.ajax({
        type: 'GET',
        url: baseUrl +'AccountTypes/'+id,
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) {
            //console.log(data);
            sessionStorage.setItem('AcctGL',data.GeneralLedgerCodeId);
            sessionStorage.setItem('Led',data.LedgerId);
        },
        error: function(jqXHR){
            checkStatus(jqXHR.status);
        }
    });
}

function getSequence(id){
    var sequence, update, Prefix='', Counter, Suffix='', Length;
    var seq = id;
    $.ajax({
        type: 'GET',
        contentType: 'application/json-patch+json',
        url: baseUrl + 'CommonSequences/'+ seq,
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function(data) {
            if(data.Prefix != null){ Prefix = data.Prefix; }
            if(data.Suffix != null){ Suffix = data.Suffix; }
            Counter = data.Counter, Length = data.FixedLength;
            update = data.Counter + 1;
            $.ajax({
                type: 'PUT',
                contentType: 'application/json-patch+json',
                url: baseUrl + 'CommonSequences/counter/'+ seq,
                headers: {
                    'Authorization' : 'Bearer ' + auth
                },
                data: JSON.stringify({
                    Counter : update
                }),
                success: function(response) {
                    console.log(response);
                },
                async: false
            });
        },
        async: false
    });
    const str = ""+Counter+"";
    var Count = str.padStart(Length, '0');
    sequence = Prefix + Count + Suffix;

  return sequence;
}

function Cashier(){
    var GL = sessionStorage.getItem('GLCodeId');
    //console.log(GL);
    if (GL === null ) {
        $('.Teller').addClass('hidden');
        $('.TellerLogin').removeClass('hidden');
    }
}

function logOut(){ 
    $.ajax({
        type: 'POST',
        url: baseUrl +'Logout',
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) {
            sessionStorage.clear();
            window.location.reload();
        },
        error: function(jqXHR){            
            sessionStorage.clear();
            window.location.href = 'Login'; 
            //checkStatus(jqXHR.status);
        }
    }); 
}

function acctMg(input){
    $('#Message').val('');
    $.ajax({
        type: 'GET',
        url: baseUrl + 'AccountPopupMsg/'+input,
        dataType: 'json',
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) {
            $('#Message').val(data.Message); 
        },
        error: function (jqXHR) {
            console.log(jqXHR);
        }
    });
}

function addAct(input){
    var $TABLE = $('#batchs');
    $.ajax({
        type: 'GET',
        url: baseUrl + 'accounts/all/'+input,
        dataType: 'json',
        async: false,
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) {
            var b = data.AvailableBalance;
            $('tr.hide td#name').html(data.AccountName); $('tr.hide td#acId').html(input); 
            $('tr.hide td#acctno').html(data.AccountNumber); $('tr.hide td#no').html(no);
            $('tr.hide td#bal').html(b.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); 
            $('tr.hide td#nom').html(''); $('tr.hide td#glId').html('');
            var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line'); 
            $TABLE.find('table').append($clone); no++
        },
        error: function (jqXHR) {
            console.log(jqXHR);
        }
    });
}

function addGL(input){
    var $TABLE = $('#batchs');
    $.ajax({
        type: 'GET',
        url: baseUrl + 'GeneralLedgerCode/'+input,
        dataType: 'json',
        async: false,
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) { 
            $('tr.hide td#bal').html(''); $('tr.hide td#acId').html(''); $('tr.hide td#acctno').html(''); 
            $('tr.hide td#glId').html(input); $('tr.hide td#no').html(no);
            $('tr.hide td#nom').html(data.SubCode); $('tr.hide td#name').html(data.Description);
            var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line'); //console.log($clone);
            $TABLE.find('table').append($clone); no++
        },
        error: function (jqXHR) {
            console.log(jqXHR);
        }
    });
}

var no = 1;
function addToNominal(input){
    var $TABLE = $('#batchs'); 
    $.ajax({
        type: 'GET',
        url: baseUrl + 'GeneralLedgerCode/'+input,
        dataType: 'json',
        async: false,
        headers: {
            'Authorization' : 'Bearer ' + auth
        },
        success: function (data) { 
            $('tr.hide td#no').html(no); $('tr.hide td#glId').html(input); $('tr.hide td#type').html(data.GLType); 
            $('tr.hide td#nom').html(data.SubCode); $('tr.hide td#name').html(data.Description);
            var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line'); 
            $TABLE.find('table').append($clone); no++;
        },
        error: function (jqXHR) {
            console.log(jqXHR);
        }
    });
}

function sumBatchCredit(){
    var data = getBatchData(); var CTotal = 0; //console.log(data);
    $.each(data, function(key, value) { //console.log(value);
        async: false;
        var Current = CTotal, Credit = parseInt(value.Credit); 
        if(Credit != null){
            CTotal = parseInt(Current) + parseInt(Credit); console.log(CTotal);
        }
    });
    return CTotal;
}

function sumBatchDebit(){
    var data = getBatchData(); var DTotal = 0; //console.log(data);
    $.each(data, function(key, value) {
        async: false;
        var Curr = DTotal, Debit = parseInt(value.Debit);
        if(Debit != null){
            DTotal = parseInt(Curr) + parseInt(Debit);
        }
    });
    return DTotal;
}

function getBatchData(){
    var $TABLE = $('#batchs');
    jQuery.fn.pop = [].pop;
    jQuery.fn.shift = [].shift;

    var $rows = $TABLE.find('tr:not(:hidden)');
    var headers = [];
    var data = [];
    $($rows.shift()).find('th:not(:empty)').each(function () {
        headers.push($(this).text());
    });
    $rows.each(function () {
        var $td = $(this).find('td');
        var h = {};
        headers.forEach(function (header, i) {
          h[header] = $td.eq(i).text();   
        });
    
        data.push(h);
    });

    return data;
}

$('#Export').click(function () {
    var $EXPORT = $('#export');
    var data = getBatchData();
    $EXPORT.text(JSON.stringify(data));
});

$(document).ready(function() {
    
    $('.table-remove').click(function () {
      $(this).parents('tr').detach();
    });

    $('.sum').click(function () {
        var Credit = sumBatchCredit(); var Debit = sumBatchDebit();
        var Balance = Credit - Debit;
        $('#Credit').val(Credit); $('#Debit').val(Debit); $('#Total').val(Balance); 
    });

    $('.table-up').click(function () {
      var $row = $(this).parents('tr');
      if ($row.index() === 1) return; 
      $row.prev().before($row.get(0));
    });

    $('.table-down').click(function () {
      var $row = $(this).parents('tr');
      $row.next().after($row.get(0));
    });
});


