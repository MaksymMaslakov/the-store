function readURL(input) {
  let reader = new FileReader();

  if (input.target.files && input.target.files[0]){
    reader.onload = function (e) {
      document.getElementById('blah')
        .setAttribute('src', e.target.result);
    };

    reader.readAsDataURL(input.target.files[0]);
  }
}

export default readURL;



