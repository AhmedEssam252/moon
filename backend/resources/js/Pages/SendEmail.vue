<script setup>
import './js/sendEmail'
import AppLayout from '@/Layouts/AppLayout.vue';
import ActionMessage from '@/Components/ActionMessage.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import {reactive} from 'vue';
import axios from 'axios';

const props = defineProps({
    message: Array,
});

const form = reactive({
    id: props.message[0].id,
    SendTo: props.message[0].Email,
    bcc:'info@moonegypt.com',
    subject: '',
    description: '',
});

const SendReply = () => {
    axios.post(route('SendReply',form))
    .then(res => {
       console.log(res)
    })
};

</script>


<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Send Email
            </h2>
        </template>

        <section id="messages">

            <form id="sendMail"  @submit.prevent="SendReply">
                <div class="wrapper">
                    <div class="content">
                        <div>
                            <InputLabel for="to" value="send to" />
                            <ul class="ULtags">
                                <li>
                                    <TextInput
                                        id="to"
                                        v-model="form.SendTo"
                                        type="text"
                                        class="mt-1 block w-full"
                                    />
                                    <InputError :message="form.errors" class="mt-2" />
                                </li>
                                <input class="InputText" type="text" spellcheck="false">
                            </ul>
                        </div>
                        <div>
                            <span>cc: </span>
                            <ul class="ULtags2"><input class="InputText2" type="text" spellcheck="false"></ul>
                        </div>
                        <div>
                            <span>bcc: </span>
                            <ul class="ULtags3"><input class="InputText3" type="text" v-model="form.bcc" spellcheck="false"></ul>
                        </div>
                        <div>
                            <span>subject: </span>
                            <ul class="ULtags4"><input type="text" v-model="form.subject" id="subject" spellcheck="false"></ul>
                        </div>
                        <div>
                            <span>description: </span>
                            <ul class="ULtags4"><textarea id="your_summernote" v-model="form.description" cols="30" rows="10"></textarea></ul>
                        </div>
                    </div>
                    <div class="members"></div>
                    <div class="details">
                        <div class="removeTag">deleteAll</div>
                        <div class="addTag">addMembers</div>

                        <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Save
                        </PrimaryButton>
                    </div>
                </div>
            </form>

        </section>

    </AppLayout>
</template>
