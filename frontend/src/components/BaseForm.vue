<template>
    <form class="container w-100 m-auto p-2 rounded shadow" @submit="createTask">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Describe a new task" aria-label="task" aria-describedby="submit-button" v-model="newTask" v-focus="true">
            <button class="btn btn-dark" type="submit" id="submit-button">Add Task</button>
        </div> 
    </form>
</template>

<script>
const focus = { mounted: (el) => el.focus() }

export default {
    name: 'BaseForm',
    directives: {
        focus
    },
    data() {
        return {
            newTask: ''
        }
    },
    methods: {
        async createTask(event) {
            event.preventDefault();

            try {
                const task = JSON.stringify({
                    description: this.newTask,
                    complete: false
                });
    
                await fetch('http://localhost:3000/', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: task
                });

                this.newTask = '';
            } catch (error) { console.log(error); }
        }
    }
}
</script>