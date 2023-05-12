import _ from 'lodash';
import './index.css';

const bkList = document.querySelector('.lists');
const form = document.createElement('form');
   form.className = 'hide';
    form.id = `form${i}`;
   const txt = document.createElement('input');
   txt.type = 'text';
   txt.id = `text${i}`;
   txt.value = mylocaldata[i].discribtion;
   form.appendChild(txt);
    span.appendChild(form);

const displayList = () => {
  for (let i = 0; i < allList.length; i += 1) {
    bkList.innerHTML += `
    <div class='items'>
      <div class='form-checkbox'>
        <input type="checkbox" id="check" name="check" >
        <label class="label" id="label" for="check">${allList[i].description}</label>
      </div>
      <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
    </div>
    <hr>
  `;
  }
};

window.onload = displayList();
