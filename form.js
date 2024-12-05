
// function showForm() {
//     var userType = document.getElementById('userType').value;
//     document.getElementById('customerForm').style.display = userType === 'customer' ? 'block' : 'none';
//     document.getElementById('companyForm').style.display = userType === 'company' ? 'block' : 'none';
// }
// function showFormAndHideSelect() {
//     var userType = document.getElementById('userType').value;
//     var selectElement = document.getElementById('userType');
    
//     // إخفاء القائمة المنسدلة
//     selectElement.style.display = 'none';
    
//     // إظهار النموذج المناسب
//     if (userType === 'customer') {
//         document.getElementById('customerForm').style.display = 'block';
//     } else if (userType === 'company') {
//         document.getElementById('companyForm').style.display = 'block';
//     }
// }
function selectOption(option) {
    document.querySelector('.card-container').style.display = 'none';
    document.getElementById('sel').style.display = 'none';
    document.getElementById('sele').style.display = 'none';
    document.getElementById('selec').style.display = 'none';

    if (option === 'user') {
        document.getElementById('loginFormCustomer').style.display = 'block';
        document.getElementById('customerForm').style.display = 'none';
    } else if (option === 'creator') {
        document.getElementById('loginFormCompany').style.display = 'block';
        document.getElementById('creatorForm').style.display = 'none';
    }
}

function showSignUp(userType) {
    document.querySelectorAll('.form-container, .loginForm').forEach(el => el.style.display = 'none');

    if (userType === 'user') {
        document.getElementById('customerForm').style.display = 'block';
    } else if (userType === 'creator') {
        document.getElementById('creatorForm').style.display = 'block';
    }
}




// إظهار نموذج تسجيل الدخول المناسب بناءً على النوع
function showLogin(userType) {
    document.querySelectorAll('.form-container, .loginForm').forEach(el => el.style.display = 'none');

    if (userType === 'user') {
        document.getElementById('loginFormCustomer').style.display = 'block';
    } else if (userType === 'creator') {
        document.getElementById('loginFormCompany').style.display = 'block';
    }
}



///////



    




// function showSignUp() {
//     document.getElementById('loginForm').style.display = 'none';
//     document.getElementsByClassName('form-container').style.display = 'block';
    

//   }

//   function showLogin() {
//     document.getElementById('signUpContainer').style.display = 'none';
//     document.getElementsByClassName('form-container').style.display = 'block';
    

//   }


