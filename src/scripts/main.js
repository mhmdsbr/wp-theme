var taskTracker = {}
if (document.readyState !== "loading") {
  console.log("document is already ready, just execute code here");
} else {
  document.addEventListener("DOMContentLoaded", function () {

      taskTracker.props = {
        $taskListNode: document.getElementById("taskList"),
        $taskDetailContainerNode: document.getElementById("taskDetailContainer"),
        $filterByStatusNode: document.getElementById("filterByStatus"),
        $taskTitleNode: document.getElementById("taskTitle"),
        $taskTagNode: document.getElementById("taskTag"),
        $taskDescriptionNode: document.getElementById("taskDesc"),
        $taskDeadlineNode: document.getElementById("taskDeadline"),
        $taskStatusNode: document.getElementById("status"),
        $taskNewDeadlineNode: document.getElementById("taskNewDeadline"),
        $createTaskModalElem: $('#openCreateTask'),
        $openSingleTaskElem: $('#openSingleTask'),
        taskList: [
          {
            title: "Create Wireframe",
            tag: "#UIUX",
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.`,
            deadline: '2022-12-22T22:35',
            status: 'InProgress',
          }
        ],
        selectedTask: {}
      }

      taskTracker.methods = {
        onOpenNewTaskModalClick: function () {
          taskTracker.props.$createTaskModalElem.modal({
            fadeDuration: 200,
            fadeDelay: 1,
            escapeClose: false,
            clickClose: false,
            showClose: false
          });
        },
        onTaskInfoClick: function (evt) {
          const id = evt.srcElement.parentElement.getAttribute('id')
          if (id) {
            evt.preventDefault()
            taskTracker.props.$openSingleTaskElem.modal({
              fadeDuration: 200,
              fadeDelay: 1,
              escapeClose: false,
              clickClose: false,
              showClose: false
            });
            taskTracker.props.selectedTask = taskTracker.props.taskList[id]
            taskTracker.methods.removeAllChildren(taskTracker.props.$taskDetailContainerNode)
            const taskNode = taskTracker.methods.getTaskTemplate(taskTracker.props.selectedTask)
            taskTracker.props.$taskNewDeadlineNode.value = taskTracker.props.selectedTask.deadline
            taskTracker.props.$taskDetailContainerNode.appendChild(taskNode)
          }
        },
        removeAllChildren: function (node) {
          let fc = node.firstChild;
          while (fc) {
            node.removeChild(fc);
            fc = node.firstChild;
          }
        },
        onCloseTaskModalClick: function () {
          $.modal.close();
          taskTracker.props.selectedTask = {}
        },
        onUpdateTaskClick: function () {
          taskTracker.props.selectedTask.status = taskTracker.props.$taskStatusNode.value
          taskTracker.props.selectedTask.deadline = taskTracker.props.$taskNewDeadlineNode.value
          taskTracker.methods.onCloseTaskModalClick()
          taskTracker.methods.refreshList()
        },
        onSaveTaskClick: function () {
          const task = {
            title: taskTracker.props.$taskTitleNode.value,
            tag: taskTracker.props.$taskTagNode.value,
            description: taskTracker.props.$taskDescriptionNode.value,
            deadline: taskTracker.props.$taskDeadlineNode.value,
            status: 'InProgress'
          }
          if (task.title) {
            taskTracker.methods.addNewTask(task)
            taskTracker.methods.resetForm()
            taskTracker.methods.onCloseTaskModalClick()
          }
        },
        getTaskTemplate: function (task) {
          const taskItem = (
            `
                <div class="flex ml-4">
                  <div class="flex flex-col pl-4">
                    <h2 class="font-medium text-sm">${task.title}</h2>
                    <h3 class="text-gray-500 text-sm">${task.tag}</h3>
                    <h4 class="text-gray-500 text-sm">${task.deadline}</h4>
                    <h4 class="text-gray-500 text-sm">${task.status}</h4>
                    <p>${task.description}</p>
                  </div>
                </div>
                <a onclick="taskTracker.methods.onTaskInfoClick(event)"
                  class="text-gray-500 flex items-center text-sm focus:outline-none rounded ml-auto py-2 leading-none">
                  Info
                </a>
          `)
          const mainDiv = document.createElement('div')
          mainDiv.classList.add('bg-gray-100', 'px-8', 'py-6', 'flex', 'items-center', 'border-b', 'border-gray-300')
          mainDiv.innerHTML = taskItem
          return mainDiv
        },
        refreshList: function () {
          taskTracker.methods.removeAllChildren(taskTracker.props.$taskListNode)
          taskTracker.props.taskList.forEach(function (task, index) {
            const taskNode = taskTracker.methods.getTaskTemplate(task)
            taskNode.setAttribute('id', index)
            taskTracker.props.$taskListNode.appendChild(taskNode)
          })
        },
        addNewTask: function (task) {
          taskTracker.props.taskList.push(task)
          const taskNode = taskTracker.methods.getTaskTemplate(task)
          taskNode.setAttribute('id', taskTracker.props.taskList.length - 1)
          taskTracker.props.$taskListNode.appendChild(taskNode)
        },
        resetForm: function () {
          taskTracker.props.$taskTitleNode.value = ''
          taskTracker.props.$taskTagNode.value = ''
          taskTracker.props.$taskDescriptionNode.value = ''
          taskTracker.props.$taskDeadlineNode.value = ''
        },
        onFilterChange: function (evt) {
          const now = new Date().getTime()
          if (evt.value === 'status' || evt.value === 'deadline') {
            taskTracker.methods.removeAllChildren(taskTracker.props.$taskListNode)
            taskTracker.props.taskList.forEach(function (task, index) {
              if (task.status === 'Done' && evt.value === 'status') {
                const taskNode = taskTracker.methods.getTaskTemplate(task)
                taskNode.setAttribute('id', index)
                taskTracker.props.$taskListNode.appendChild(taskNode)
              } else if (new Date(task.deadline).getTime() > now && evt.value === 'deadline') {
                const taskNode = taskTracker.methods.getTaskTemplate(task)
                taskNode.setAttribute('id', index)
                taskTracker.props.$taskListNode.appendChild(taskNode)
              }
            })
          } else if (evt.value === 'reset') {
            taskTracker.methods.refreshList()
          }
        },
        init: function () {
          taskTracker.methods.refreshList()
        }
      }

      taskTracker.methods.init();
    }
  );
}

window.taskTracker = taskTracker

