<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from '@inertiajs/inertia-vue3';

const props = defineProps({
    messages: Array,
});
</script>


<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Messages
            </h2>
        </template>

        <section id="messages">

            <table class="styled-table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Type</th>
                        <th>Message</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="message in messages">
                        <td>{{ message.id  }}</td>
                        <td>{{ message.Name  }}</td>
                        <td>{{ message.Email }}</td>
                        <td>{{ message.Type }}</td>
                        <td>{{ message.Message }}</td>
                        <td><Link :href="route('Reply', message.id )">reply</Link></td>
                    </tr>
                </tbody>
            </table>

        </section>

    </AppLayout>
</template>
