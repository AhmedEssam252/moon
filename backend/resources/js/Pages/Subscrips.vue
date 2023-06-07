<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';

const props = defineProps({
    subscrips: Array,
});
</script>


<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Subsrips
            </h2>
        </template>

        <section id="subscrips">

            <table class="styled-table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="subscrip in subscrips">
                        <td>{{ subscrip.id  }}</td>
                        <td>{{ subscrip.Email }}</td>
                    </tr>
                </tbody>
            </table>

        </section>

    </AppLayout>
</template>
