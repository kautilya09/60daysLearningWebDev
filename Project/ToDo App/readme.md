First Project (ToDo Application)

- [ ] Auto generated task ID
- [ ] Task Name
- [ ] Task Description
- [ ] Date(valid)
- [ ] Time(valid)
- [ ] Add Task
- [ ] Table generation for the list of Tasks with columns: ID | Name | Description | Date | Time | Photo URL | Operations(edit/delete)
- [ ] Photo URL
- [ ] operations(edit/delete)

MVC architecture>M:Model
				 V:View
				 C:Control

Feature Making:
- [ ] Add feature:
Button click?
		when I click on a button, it must call some function which must contain the add logic. button: source | click: event | Action: function()
		when add function calls, it does following:
			Validate the fields
			If validation is correct so it will store the value:
				name | desc | photo | date | time | time - so it will be an object
			object=record
			I need multiple records(tasks), so it means array of objects
			if we will use the HTML Table, the time complexity will become n^2. Therefore, we use array of objects.
			Now print the record(object). Example: for in loop dynamically tr and td build
			Show the totals, array length

