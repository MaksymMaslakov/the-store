function readURL(input) {
  // console.log(input.files)
  let reader = new FileReader();

  if (input.target.files && input.target.files[0]){
    reader.onload = function (e) {
      console.log(e.target)
      document.getElementById('blah')
        .setAttribute('src', e.target.result);
    };

    reader.readAsDataURL(input.target.files[0]);
  }
}

export default readURL;



