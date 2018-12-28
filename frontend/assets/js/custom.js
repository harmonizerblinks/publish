"use strict";
var uname = atob(sessionStorage.getItem('username'));
var bUrl = atob(sessionStorage.getItem('ip')); 
var date = atob(sessionStorage.getItem('date'));

// if (sessionStorage.getItem('userId') != null){
//     var fullname = atob(sessionStorage.getItem('fullname'));
//     $('#userfullname').html(fullname);
//     $('#usertype').html(atob(sessionStorage.getItem('type')));
//     $('.uname').val(atob(sessionStorage.getItem('username')));
//     $('#UserPic').attr("src", bUrl+"Files/User/"+atob(sessionStorage.getItem('image')));
// }else{
//     console.log('redirecting');
//      window.location.href = "Login.php";
// }

function showForm(type){
    var type = type;
    $('.Savings').addClass('hidden');
    $('.Fixed-Deposit').addClass('hidden');
    $('.'+type).removeClass('hidden');
}

function dMethod(type){
    var type = type;
    $('.Dcheque').addClass('hidden');
    if(type === "CHEQUE"){
        $('.Dcheque').removeClass('hidden');
    }
}

function wMethod(type){
    var type = type;
    $('.Wcheque').addClass('hidden');
    if(type === "CHEQUE"){
        $('.Wcheque').removeClass('hidden');
    }
}

function Continue(){
    $('#BaseType').attr("disabled","disabled");
    $('#AccountType').attr("disabled","disabled");
    $('#AccountTypeCode').attr("disabled","disabled");   
}

function GLType(type){
    var type = type;
    $('.DBank').addClass('hidden');
    if(type === "false"){
        $('.DBank').removeClass('hidden');
    }
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2){ month = '0' + month;}
    if (day.length < 2){ day = '0' + day;}

    return [year, month, day].join('-');
}

function daysOld(time)
{
    var count = new Date(time);
    var now = new Date(date); //console.log(count, now);
    var distance = now - count;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    console.log(days);

    return days;
}

function daysRemain(time)
{
    var count = new Date(time);
    var now = new Date(date);
    var distance = count - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    return days;
}

function maturity()
{
    var days = parseInt($('#FixedDepositPeriod').val()) + 1;
    var result = new Date($('#OpeningDate').val()); //console.log( result);
    if(days === null){ days = 0} //console.log(days);
    result.setDate(result.getDate() + days); //console.log(result);
    var date = formatDate(result);

    $('#FixedDepositMaturityDate').val(date);
}

function apiMsg(type, title, text){
    var type = type, title = title, text = text;
    swal({
        title: title,
        text: text,
        type: type
    });
}


function readPassport(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#passpreview')
                .attr('src', e.target.result)
                .width(250)
                .height(250);
            $('#passprev')
                .attr('src', e.target.result)
                .width(250)
                .height(250);
            };
        reader.readAsDataURL(input.files[0]);
    };
} 

function readSignature(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#signpreview')
                .attr('src', e.target.result)
                .width(250)
                .height(250);
            $('#signprev')
                .attr('src', e.target.result)
                .width(250)
                .height(250);
            };
        reader.readAsDataURL(input.files[0]);
    };
}


$(function () {
    var url = window.location.pathname; //sets the variable "url" to the pathname of the current window
    var activePage = url.substring(url.lastIndexOf('/') + 1); 
        // $('.sidebar-collapse li').parent().addClass("active");
        $('.sidebar-collapse li a').each(function () { 
            var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1); 
 
            if (activePage == linkPage) {    
                $(this).parent().addClass('active'); 
            }
        });
        $('.sidebar-collapse li ul li a').each(function () { 
            var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1); 
 
            if (activePage == linkPage) {    
                $(this).parent('.sidebar-collapse li').addClass('active');
                $(this).children('.sidebar-collapse li ul li').addClass('active'); 
            }
        });
    var pathArray = window.location.pathname.split( '/' ); var i;
    for (i = 0; i < pathArray.length; i++) {
      if(pathArray[i] !== ""){ $('.'+pathArray[i]).addClass('active'); }
    }
})
    
$(document).ready(function() {
    //getMac();
    $('.fdSet').on('ifChanged', function(event) {
        if(event.target.checked === true){
            $('#AdjustmentInterestRate').removeAttr("disabled");
            $('#AdjustmentPeriod').removeAttr("disabled");
        }else{
            $('#AdjustmentInterestRate').attr("disabled","disabled");
            $('#AdjustmentPeriod').attr("disabled","disabled");
        }
    });

    $('.footable').footable();
    $('.footable2').footable();

        $('#data_5 .input-daterange').datepicker({
            keyboardNavigation: false,
            forceParse: false,
            autoclose: true
        });

        // $('.i-checks').iCheck({
        //     checkboxClass: 'icheckbox_square-green',
        //     radioClass: 'iradio_square-green',
        // });

        $('.chosen-select').chosen({width: "100%"});
        $(".select2_demo_1").select2();
        $(".select2_demo_3").select2({
            placeholder: "Select an Account",
            allowClear: true
        });

        $('#data_1 .input-group.date').datepicker({
            todayBtn: "linked",
            keyboardNavigation: false,
            forceParse: false,
            calendarWeeks: true,
            autoclose: true,
            value: date
        });


    $(document).ready(function () {
        // Set idle time
        $( document ).idleTimer(6000000);
    });

    $( document ).on( "idle.idleTimer", function(event, elem, obj){
        toastr.options = {
            "positionClass": "toast-top-right",
            "timeOut": 10000,
            "progressbar": true
        }

        toastr.warning('you are idle for 20 minutes you will be Disconnected from server in 10second.','Connection DisActivated');
        $('.custom-alert').fadeIn();
        $('.custom-alert-active').fadeOut();
        logOut();
        // setInterval(function(){ window.location.href="Lock" }, 100);
    });

    $( document ).on( "active.idleTimer", function(event, elem, obj, triggerevent){
        // function you want to fire when the user becomes active again
        toastr.clear();
        $('.custom-alert').fadeOut();
        toastr.success('Welcome Back User '+atob(sessionStorage.getItem('fullname')),'Connection Active');
    });

});


    $(document).ready(function(){
        // Ladda.bind( '.ladda-button',{ timeout: 10000 });

        $('.dataTables-example').DataTable({
            pageLength: 25,
            responsive: true,
            dom: '<"html5buttons"B>lTfgitp',
            buttons: [
                { extend: 'copy'},
                {extend: 'csv'},
                {extend: 'excel', title: 'ExampleFile'},
                {extend: 'pdf', title: 'ExampleFile'},
                {extend: 'print',
                 customize: function (win){
                        $(win.document.body).addClass('white-bg');
                        $(win.document.body).css('font-size', '10px');

                        $(win.document.body).find('table')
                                //s .addClass('compact')
                                .css('font-size', 'inherit');
                    }
                }
            ]

        });
    });

