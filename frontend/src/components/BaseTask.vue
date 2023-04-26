<template>
    <main class="d-flex mb-3 px-3 py-1 justify-content-between align-items-center w-100 rounded shadow text-light bg-opacity-75" v-for="task in tasks" :key="task._id">
        <h4 v-if="task.complete" id="descriptionTask" class="text-decoration-line-through">{{ task.description }}</h4>
        <h4 v-else id="descriptionTask">{{ task.description }}</h4>
        <div class="p-2 d-flex align-items-center">
            <input type="checkbox" class="form-check-input p-3 rounded m-2" :checked="task.complete" @click="updateTask($event, task._id)">
            <button class="btn btn-danger shadow-sm" @click="deleteTask(task._id)">X</button>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'BaseTask',
        data() {
            return {
                tasks: []
            }
        },
        methods: {
            async getTasks() {
                try {
                    const req = await fetch('http://localhost:3000/');
    
                    const data = await req.json();
    
                    this.tasks = [...data];
                } catch (error) { console.log(error); }
            },

            async updateTask(event, id) {
                try {
                    const statusCheckbox = event.target.checked;
                    const taskUpdated = JSON.stringify({ complete: statusCheckbox });

                    await fetch(`http://localhost:3000/${id}`, {
                        method: 'PATCH',
                        headers: { "Content-Type": "application/json" },
                        body: taskUpdated
                    });

                } catch (error) { console.log(error); }
            },

            async deleteTask(id) {
                try {
                    await fetch(`http://localhost:3000/${id}`, { method: 'DELETE' });
                } catch (error) { console.log(error); }
            }
        },
       mounted() {
        this.getTasks();
       },
       updated() {
        this.getTasks();
       }
    }
</script>

<style scoped>
    main {
        background-color: #233044;
    }
</style>