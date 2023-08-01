function checkIsPhoneNumber(phone) {
    var flag = false;
    //var phone = jQuery('#popPhoneDKTV').val().trim(); // ID của trường Số điện thoại
    phone = phone.replace('(+84)', '0');
    phone = phone.replace('+84', '0');
    phone = phone.replace('0084', '0');
    phone = phone.replace(/ /g, '');
    if (phone != '') {
        var firstNumber = phone.substring(0, 2);
        if ((firstNumber == '03' || firstNumber == '04' || firstNumber == '05' || firstNumber == '07' || firstNumber == '08' || firstNumber == '09')) {
            if (phone.length == 10) {
                flag = true;
            }
        } else if (phone.length == 11) {
            var first1Number = phone.substring(0, 1);
            if (first1Number == '0') {
                flag = true;
            }
        }
    }
    return flag;
}
function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}
jQuery(document).ready(function ($) {
    // START for Promotion-Thang06 form
    //[id^="wpcf7-f23459"]
    $('[id^="wpcf7-f23459"] .__alert_name').hide(300);
    $('[id^="wpcf7-f23459"] .__alert_phone').hide(300);
    $('[id^="wpcf7-f23459"] .__invalid_phone').hide(300);
    $('[id^="wpcf7-f23459"] .__alert_age').hide(300);
    //[id^="wpcf7-f23459"]
    $(document).on('click', '[id^="wpcf7-f23459"] input.__btn-submit', function (e) {
        let __flat_check_validations = false;
        // validation all fields
        let __required = $('[id^="wpcf7-f23459"] .__required').val();
        if (__required == "") {
            __flat_check_validations = true;
        }
        if ($('[id^="wpcf7-f23459"] .__form_data').hasClass("__required")) {
            let __frm_name = $('[id^="wpcf7-f23459"] .__required.__frm_name').val();
            if (__frm_name == "") {
                __flat_check_validations = true;
                $('[id^="wpcf7-f23459"] .__alert_name').show(300);
            } else {
                $('[id^="wpcf7-f23459"] .__alert_name').hide(300);
            }
        }
        if ($('[id^="wpcf7-f23459"] .__form_data').hasClass("__required")) {
            let __frm_age = $('[id^="wpcf7-f23459"] .__required.__frm_age').val();
            if (__frm_age == "") {
                __flat_check_validations = true;
                $('[id^="wpcf7-f23459"] .__alert_age').show(300);
            } else {
                $('[id^="wpcf7-f23459"] .__alert_age').hide(300);
            }
        }
        if ($('[id^="wpcf7-f23459"] .__form_data').hasClass("__required")) {
            let __frm_phone = $('[id^="wpcf7-f23459"] .__required.__frm_phone').val();
            if (__frm_phone == "") {
                __flat_check_validations = true;
                $('[id^="wpcf7-f23459"] .__alert_phone').show(300);
                $('[id^="wpcf7-f23459"] .__invalid_phone').hide(300);
            } else {
                if (checkIsPhoneNumber(__frm_phone) == false) {
                    __flat_check_validations = true;
                    $('[id^="wpcf7-f23459"] .__invalid_phone').show(300);
                } else {
                    $('[id^="wpcf7-f23459"] .__invalid_phone').hide(300);
                }
                $('[id^="wpcf7-f23459"] .__alert_phone').hide(300);
            }
        }
        //merge Age + Area + Question --> Note
        let __frm_note = $('[id^="wpcf7-f23459"] .__form_data.__frm_note');
        let __frm_age = $('[id^="wpcf7-f23459"] .__form_data.__frm_age');
        let __frm_question = $('[id^="wpcf7-f23459"] .__form_data.__frm_quest');
        // __frm_note.val() = __frm_age.val() + ", " + __frm_area.val() + ", " + __frm_question.val();
        __frm_note.val("Tuoi: " + __frm_age.val() + ", Cau hoi: " + __frm_question.val());
        console.log(__frm_note.val());
        console.log($('[id^="wpcf7-f23459"] .__required.__frm_phone').val());
        console.log($('[id^="wpcf7-f23459"] .__required.__frm_name').val());
        // return false	
        if (__flat_check_validations == true) {
            e.preventDefault();
        } else {
            $('[id^="wpcf7-f23459"] form').submit(function (e) {
                //e.preventDefault();//prevent the form from actually submitting
                window.location.href = 'https://vus.edu.vn/thank-you';
            });
        }
        return;
    });
    // END for Promotion-Thang06 form
})
