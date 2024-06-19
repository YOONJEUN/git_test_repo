function isValidate(e, formNode){
    if(formNode.username.value.trim().length === 0){
        alert('아이디를 입력하세요.');
        formNode.username.focus();
        return false; //이벤트 취소
    }

    if(formNode.password.value.trim() === ""){
        alert('비밀번호를 입력하세요.');
        formNode.password.focus();
        return false;
    }

    if(formObj.passwordConfirm.value.trim() === ""){
        alert('비밀번호 확인을 입력하세요.');
        formObj.passwordConfirm.focus();
        return false;
    }
    else{
        if(formObj.password.value.trim() !== formObj.passwordConfirm.value.trim()){
            alert('비밀번호가 일치하지 않아요.');
            formObj.passwordConfirm.focus();
            return false;
        }
    }

    var isGender = false;
    for(var i = 0; i < formNode.gender.length; i++){
        if(formNode.gender[i].checked){
            isGender = true;
            break;
        }
    }

    if(!isGender){
        alert('성별을 선택하세요');
        formNode.gender[0].focus();
        return false;
    }

    var checks = 0;
    formNode.inter.forEach(checkNode => {if(checkNode.checked) checks++;});
    if(checks < 2){
        alert('관심사항은 2개 이상 선택하세요');
        return false;
    }

    if(formObj.grade.selectedIndex === 0){
        alert('학력을 선택하세요');
        return false;
    }

    if(formNode.file.value.trim().length === 0){
        alert('파일을 선택하세요.');
        return false; 
    }

    if(formNode.self.value.trim().length === 0){
        alert('자기소개를 입력하세요.');
        formNode.self.focus();
        return false; 
    }
    return true;
}

function fnNoSubmitButton(e, formNode){
    console.log(formNode);

    if(formNode === undefined)
        formNode = document.forms[0];

    if(isValidate(e, formNode)) formNode.submit(); 
}