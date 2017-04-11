<template>
   <form v-on:submit.prevent="addLead">
   
          <label >Nome da empresa</label>
          <input type="text" id="cad" v-model="newLead.fantasia">

   
          <label >Nome do Contato:</label>
          <input type="text" id="datapc" v-model="newLead.contato1_ori">
     
   
          <label >Telefone Comercial:</label>
          <input type="text" id="leadid" v-model="newLead.telefone1_ori">   
     
   
          <label >Telefone Celular:</label>
          <input type="text" id="idori" v-model="newLead.telefone2_ori">
     
   
          <label >E-mail:</label>
          <input type="text" id="idori" v-model="newLead.email1">
     
        <input type="submit" class="btn btn-primary col-lg-12" value="Add Lead">
      </form>
</template>

<script>


import firebase from 'firebase'

let config = {
   apiKey: "AIzaSyAmpVj5kBIiCyvreDfEytbyhOAdPC1MOWk",
    authDomain: "teste-ba39a.firebaseapp.com",
    databaseURL: "https://teste-ba39a.firebaseio.com",
    storageBucket: "teste-ba39a.appspot.com",
    messagingSenderId: "830320086562"
}

let app = firebase.initializeApp(config);
let db = app.database();

let booksRef = db.ref('books');
let leadsRef = db.ref('leads');

export default {
  name: 'LeadForm',
  firebase: {
    books: booksRef,
    leads: leadsRef
  },
  data () {


    return {
        newBook: {
          title: '',
          author: '',
          url: ''
        },
        newLead: {
          id_ori: '',
          data_cad: '',
          data_gl: '',
          data_pc: '',
          gl_leadlid: '',
          ip_lead: '',
          empresa_ori: '',
          tipo_ori: '',
          subtipo_ori: '',
          eps: '',
          caso: '',
          cnpj_ori:'',
          razao_social_ori:'',
          fantasia: '',
          cidade: '',
          uf: '',
          contato1_ori:'',
          telefone1_ori:'',
          telefone2_ori:'',
          telefone3_ori:'',
          telefone4_ori:'',
          telefone5_ori:'',
          obs1:'',
          obs2:'',
          fonte_ori:'',
          interesse:'',
          valor_dia_benef:'',
          dias_mes:'',
          num_func:'',
          email1:'',
          email2:'',
          cep:'',
          cep3dig: '',
          fornecedoratualdepat: '',
          fornecedoratualvt: '',
          ppat: '',
          asindical: '',
          cidaderia: '',
          regitomica: '',
          taxalimiteva: '',
          taxalimitevr: '',
          prazolimite: '',
          qtdefuncionarios: '',
          cnae: '',
          dataconstituicao: '',
          abordagem: ''
        }
      }
    },
    methods: {

      addIp() {
        this.axios.get('http://ipinfo.io').then((response) => {
          // console.log(response.data);
          let ipData = response.data.ip;
          this.newLead.ip_lead = ipData;
          console.log(ipData);
        })
      },
      getDispo() {
         var isMobile = false; //initiate as false
          // device detection
          if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
              || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)) ) { isMobile = true ; this.newLead.fonte_ori = 'Mobile'; }
          else {
            this.newLead.fonte_ori = 'Desktop';
          }
      },
      getutmSource() {
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        var source = getParameterByName('utm_source');
        var medium = getParameterByName('utm_medium');
        var campaign = getParameterByName('utm_campaign');
        console.log(source, medium, campaign);
        this.newLead.subtipo_ori = source;
      },
      addLead(){
        this.affichePage().then(this.affichePageLegend);
        this.newLead.razao_social_ori = this.newLead.fantasia;
        this.newLead.empresa_ori = 'LEAD VR';
        this.newLead.EPS = 'EPS';
        this.newLead.OBS1 = 'NOME DA PAGINA';
      },

        affichePage() {

            return new Promise((resolve, reject) => {
              setTimeout(() => {  // not passing any argument, resolve is defined in the upper scope.
                    this.axios.post('/', this.newLead) 
                    .then(function (response) {
                      console.log(response.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                  resolve()
                }, 500)
             })

        },

        affichePageLegend() {

            return new Promise((resolve, reject) => {
               leadsRef.push(this.newLead);
               console.log('fb push');
                this.newLead.data_cad = '';
                this.newLead.gl_leadlid = '';
                this.newLead.id_ori = '';
                this.newLead.data_pc = '';
                console.log('cleared form');
            })    
      
        },
    },
    mounted(){

      this.getDispo();
      this.addIp();
      this.getutmSource();

      function checkTime(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }

     var today = new Date();
     var h = today.getHours();
     var myhour = h - 3;
     var m = today.getMinutes();
     var s = today.getSeconds();

     m = checkTime(m);
     s = checkTime(s);

    var timeInMs = myhour + ":" + m;

    console.log(timeInMs);

    this.newLead.data_gl = timeInMs;
    this.newLead.data_cad = timeInMs;
    },


};
</script>
