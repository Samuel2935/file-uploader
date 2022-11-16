// this code is written by samuel odinaka Ezeh

const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');
let file;
let button = document.querySelector('.button');
let input = document.querySelector('input');

button.onclick = function () {
  input.click();
};

input.addEventListener('change', function () {
  file = this.files[0];
  dragArea.classList.add('active');
  displayFile();
});

dragArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  dragText.textContent = 'Release to upload';
  dragArea.classList.add('active');
  // console.log('file loaded')
});

dragArea.addEventListener('dragleave', (e) => {
  e.preventDefault();
  dragText.textContent = 'Drag & Drop';
  dragArea.classList.remove('active');
  // console.log('file left')
});

dragArea.addEventListener('drop', (e) => {
  e.preventDefault();
  file = e.dataTransfer.files[0];
  displayFile();
  // console.log(file)
});

function displayFile() {
  let fileType = file.type;
  // console.log(fileType)
  let validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
  if (validExtensions.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.onload = (fileType) => {
      let fileURL = fileReader.result;
      // console.log(fileURL)
      let imgTag = `<img src='${fileURL}' alt=''>`;
      dragArea.innerHTML = imgTag;
    };
    fileReader.readAsDataURL(file);
  } else {
    alert('this file is not an image!');
    dragArea.classList.remove('active');
  }

  // console.log('file dropped')
}
