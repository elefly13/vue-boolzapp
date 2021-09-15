Vue.config.devtools = true;

const app = new Vue(
    {
        el: "#root",
        
        data: {
            contattoCliccato: 0,
            newMessage: "",
            replyMessage: "OK",
            cerca: null,
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [{
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_6',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ]
        },
        computed: {
            searchContact() {
                // this.contacts.forEach(element => {
                //     if (this.contacts.name.toLowerCase().split('') == this.cerca.toLowerCase().split('')){
                //         return this.contacts
                //     }
                // });
                if (this.cerca) {
                    return this.contacts.filter((item) => {
                        return this.cerca.toLowerCase().split(' ').every(e => item.name.toLowerCase().includes(e))
                    })
                } else {
                    return this.contacts;
                }
            }
        },
        methods: {
           
            indexContact(index) {
                this.contattoCliccato = index;
                // alert(index);
            },
            reply() {
                let thisContact = this.contacts[this.contattoCliccato];
                thisContact.messages.push({message: this.replyMessage, status: 'received', date: dayjs().format('DD/MM/YYYY hh:mm:ss')});
                this.replyMessage = "OK";
            },

            addMessage() {  
                let thisContact = this.contacts[this.contattoCliccato];
                if(this.newMessage != "") {
                    thisContact.messages.push({message: this.newMessage, status: 'sent', date: dayjs().format('DD/MM/YYYY hh:mm:ss')}); 
                    this.newMessage = "";
                    setTimeout(this.reply, 1000);
                } 
            }
           
   
        }
    }
)