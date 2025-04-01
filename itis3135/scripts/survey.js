// Function to prevent form submission without necessary information
function validateForm(event) {
  const requiredFields = document.querySelectorAll('input[required], textarea[required]');
  let isValid = true;

  requiredFields.forEach((field) => {
    if (field.value.trim() === '') {
      isValid = false;
    }
  });

  if (!isValid) {
    event.preventDefault();
    alert('Please fill in all required fields.');
  }
}

// Function to reset form progress
function resetForm() {
  document.querySelector('form').reset();
  const coursesContainer = document.getElementById('courses-container');
  while (coursesContainer.children.length > 1) {
    coursesContainer.removeChild(coursesContainer.lastChild);
  }
}

// Function to delete course text box
function deleteCourse(event) {
  const deleteButton = event.target;
  const coursesContainer = document.getElementById('courses-container');
  const courseInput = deleteButton.previousSibling;
  coursesContainer.removeChild(courseInput);
  coursesContainer.removeChild(deleteButton);
}

// Function to add new course text box
function addCourse() {
  const coursesContainer = document.getElementById('courses-container');
  const newCourseInput = document.createElement('input');
  newCourseInput.type = 'text';
  newCourseInput.id = 'course-' + (coursesContainer.children.length + 1);
  newCourseInput.required = true;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = deleteCourse;
  coursesContainer.appendChild(newCourseInput);
  coursesContainer.appendChild(deleteButton);
}

// Function to gather data from form and display content
function displayContent(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const contentContainer = document.createElement('div');
  contentContainer.innerHTML = `
    <h2>BYO Intro Page</h2>
    <p>First Name: ${formData.get('first-name')}</p>
    <p>Middle Initial: ${formData.get('middle-inital')}</p>
    <p>Nickname: ${formData.get('nickname')}</p>
    <p>Last Name: ${formData.get('last-name')}</p>
    <p>Mascot: ${formData.get('mascot')}</p>
    <p>Image: ${formData.get('image').name}</p>
    <p>Image Caption: ${formData.get('image-caption')}</p>
    <p>Personal Background: ${formData.get('personal-background')}</p>
    <p>Professional Background: ${formData.get('professional-background')}</p>
    <p>Academic Background: ${formData.get('academic-background')}</p>
    <p>Background in Web Development: ${formData.get('background-web-development')}</p>
    <p>Primary Computer Platform: ${formData.get('computer-platform')}</p>
    <p>Courses:</p>
    <ul>
    ${Array.from(document.querySelectorAll('#courses-container input[type="text"]')).map((course) => `<li>${course.value}</li>`).join('')}
    </ul>
    <p>Funny/Interesting Thing: ${formData.get('funny-thing')}</p>
    <p>Anything Else: ${formData.get('anything-else')}</p>
  `;
  const mainElement = document.querySelector('main');
  mainElement.innerHTML = '';
  mainElement.appendChild(contentContainer);
  const resetLink = document.createElement('a');
  resetLink.href = '#';
  resetLink.textContent = 'Reset';
  resetLink.onclick = resetForm;
  mainElement.appendChild(resetLink);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', validateForm);
  form.addEventListener('submit', displayContent);
  const resetButton = document.querySelector('input[type="reset"]');
  resetButton.addEventListener('click', resetForm);
  const addCourseButton = document.getElementById('add-course');
  addCourseButton.addEventListener('click', addCourse);
});