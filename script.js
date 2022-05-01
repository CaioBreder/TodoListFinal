
form = document.querySelector("form");
textbox = document.getElementById("newTodoItem");
todoList = document.getElementById("listTodoItems");

		 form.addEventListener("submit", process_submit);

		 function process_submit()
		{
			 event.preventDefault();

			 newList = document.createElement("li");

     newCheck = document.createElement("input");
     newCheck.setAttribute("type", "checkbox");
     newCheck.addEventListener("change", process_check);
     newList.appendChild(newCheck);


		newTodoText = document.createTextNode(textbox.value);
		newTodo = document.createElement("span");
		newTodo.appendChild(newTodoText);
			
             newList.appendChild(newTodo);

			     xText = document.createTextNode(" X");
			     x = document.createElement("spam");
			     x.setAttribute("style", "color: black");
			     x.appendChild(xText);
			     x.addEventListener("click", process_x);
                 
                     newList.appendChild(x);

			todoList.appendChild(newList);
		}
        
		function process_x(){
			event.srcElement.parentNode.remove();
		}

		function process_check()
		{
			
	}