"use strict";(globalThis["webpackChunkRetro_visor"]=globalThis["webpackChunkRetro_visor"]||[]).push([[191],{8712:()=>{},3513:()=>{},5349:()=>{},7712:()=>{},2125:()=>{},2095:()=>{},5907:()=>{},8304:()=>{},1794:()=>{},2167:()=>{},8682:()=>{},5415:()=>{},3438:()=>{},9967:(t,e,o)=>{o.r(e),o.d(e,{default:()=>X});var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.board?o("v-main",[o("nav",{staticClass:"v-sheet elevation-2"},[o("v-btn",{attrs:{icon:"",title:"Voltar à Home"},on:{click:function(e){return t.$router.push("/")}}},[o("v-icon",[t._v("arrow_back")])],1),o("label",[t._v(t._s(t.board.title))]),t.board.owner==t.$auth.user.id?o("allowed-users",{attrs:{boardId:t.id}}):t._e(),o("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:"",title:"Ordenar itens"}},"v-btn",i,!1),s),[o("v-icon",[t._v("filter_list")])],1)]}}],null,!1,3545687399)},[o("v-list",[o("v-list-item",{on:{click:function(e){return t.sort("date")}}},[o("v-list-item-icon",[o("v-icon",[t._v("calendar_month")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Por data")])],1)],1),o("v-list-item",{on:{click:function(e){return t.sort("votes")}}},[o("v-list-item-icon",[o("v-icon",[t._v("thumb_up")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Por votos")])],1)],1)],1)],1),o("v-btn",{attrs:{icon:"",title:"Adicionar coluna",loading:t.loadingNewColumn},on:{click:t.addColumn}},[o("v-icon",[t._v("view_week")])],1),o("theme-toggler"),o("profile")],1),o("main",{style:{"grid-template-columns":"repeat("+t.board.columns.length+", minMax(320px, 1fr))"}},t._l(t.board.columns,(function(e,s){return o("aside",{key:s,staticClass:"v-sheet elevation-2"},[o("v-text-field",{attrs:{solo:"","hide-details":""},on:{change:function(o){return t.refreshColumnTitle(s,e)}},model:{value:e.title,callback:function(o){t.$set(e,"title",o)},expression:"column.title"}}),o("draggable",t._b({attrs:{list:e.notes,"data-id":e.id},on:{start:t.onDragStart,end:t.onDragEnd}},"draggable",t.dragOptions,!1),[o("transition-group",{attrs:{name:t.drag?"moving":null,tag:"article","data-id":e.id}},t._l(e.notes,(function(e){return o("note",{key:e.id,ref:"note-"+e.id,refInFor:!0,attrs:{value:e},on:{remove:function(e){return t.confirmRemoveNote(e)}}})})),1)],1),o("footer",[o("v-btn",{attrs:{text:"",fab:"",small:"",title:"Deletar coluna"},on:{click:function(o){return t.confirmRemoveColumn(s,e.id)}}},[o("v-icon",[t._v("delete")])],1),o("v-btn",{attrs:{text:"",fab:"",small:"",loading:t.loadingNewNote==s,title:"Adicoinar nota"},on:{click:function(o){return t.addNote(s,e.id)}}},[o("v-icon",[t._v("note_add")])],1)],1)],1)})),0),o("dialog-confirmation",{ref:"dialogConfirmation",on:{confirm:t.confirm}})],1):t._e()},i=[],a=o(7133),r=o.n(a),n=o(6390),l=o.n(n),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"elevation-2",style:{backgroundColor:t.data.color},attrs:{id:"note-"+t.data.id,"data-id":t.data.id,"data-color":t.data.color}},[o("div",{staticClass:"handle"},[t._v(t._s(t._f("date")(t.data.createdAt)))]),o("v-textarea",{class:{blur:!t.isVisible},attrs:{filled:"","hide-details":"","auto-grow":"",rows:"1",light:t.isLight(t.data.color),disabled:!t.isVisible()},on:{change:t.save},model:{value:t.data.text,callback:function(e){t.$set(t.data,"text",e)},expression:"data.text"}}),o("label",[o("v-btn",{attrs:{icon:"",title:"Deletar nota"},on:{click:t.remove}},[o("v-icon",[t._v("delete")])],1),o("v-btn",{attrs:{icon:"",disabled:!t.isOwner()},on:{click:t.toggleVisibility}},[o("v-icon",[t._v(t._s(t.data.visible?"visibility":"visibility_off"))])],1),o("color-picker",{on:{refresh:t.refreshColor}}),o("v-btn",{attrs:{icon:"",title:"Votar nessa nota"},on:{click:t.vote}},[o("v-icon",[t._v("thumb_up")])],1),t._v(" "+t._s(t.data.votes||0)+" ")],1)],1)},c=[];const h=[[{color:window.$vue.$vuetify.theme.defaults.dark.primary,forceDark:!1},{color:window.$vue.$vuetify.theme.defaults.dark.accent,forceDark:!0},{color:window.$vue.$vuetify.theme.defaults.dark.secondary,forceDark:!1}],[{color:window.$vue.$vuetify.theme.defaults.dark.warning,forceDark:!0},{color:window.$vue.$vuetify.theme.defaults.dark.error,forceDark:!1},{color:"#ffffff",forceDark:!0}]].map((t=>t.map((t=>(t.color=t.color.toLocaleUpperCase(),t)))));var u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:"",title:"Mudar cor"}},"v-btn",i,!1),s),[o("v-icon",[t._v("palette")])],1)]}}])},[o("v-color-picker",{attrs:{"hide-canvas":"","hide-inputs":"","hide-mode-switch":"","hide-sliders":"","show-swatches":"",mode:"hexa",swatches:t.swatches},on:{input:t.refreshColor},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)},m=[];const v={name:"color-picker",data(){return{color:this.$vuetify.theme.defaults.dark.primary,swatches:h.map((t=>t.map((t=>t.color))))}},methods:{refreshColor(t){t&&(t=(t.hex??t).toLocaleUpperCase(),this.swatches.flat().includes(t)&&(this.color=t,this.$emit("refresh",this.color)))}}},f=v;var p=o(1001),b=o(3453),g=o.n(b),$=o(680),k=o(943),_=o(6428),x=o(6768),w=(0,p.Z)(f,u,m,!1,null,"40a0b82f",null);const y=w.exports;g()(w,{VBtn:$.Z,VColorPicker:k.Z,VIcon:_.Z,VMenu:x.Z});var C=o(4584);const D={name:"note",props:["value"],components:{draggable:l(),colorPicker:y,dialogConfirmation:C.Z},computed:{dragOptions(){return{forceFallback:!0,animation:250,class:"content",handle:".handle",group:"columns"}}},data(){return{data:this.value,pendingDelete:null}},methods:{refresh(t){this.data=t,this.$forceUpdate()},remove(){this.$emit("remove",this.data)},toggleVisibility(){this.data.visible=!this.data.visible,this.$emit("visible",this.data.visible),this.$forceUpdate(),this.save()},vote(){this.data.votes=parseInt(this.data.votes??"0")+1,this.$forceUpdate(),this.save()},save(){this.axios.patch(`/boards/${this.data.boardId}/notes/${this.data.id}`,this.data,{headers:this.$auth.headers}).catch((()=>{this.$store.dispatch("openAlert",{text:"Falha ao salvar nota. Tente novamente",color:"error"})}))},refreshColor(t){this.data.color=t,this.$forceUpdate(),this.save()},isLight(t){return"string"==typeof t&&h.flat().find((e=>e.color==t.toLocaleUpperCase()))?.forceDark},isOwner(){return this.data.owner==this.$auth.user.id},isVisible(){return this.data.visible||this.isOwner()}},filters:{date(t){return r()(t).format("DD/MM HH:mm")}}},V=D;var I=o(8177),Z=(0,p.Z)(V,d,c,!1,null,"b93ea6c2",null);const N=Z.exports;g()(Z,{VBtn:$.Z,VIcon:_.Z,VTextarea:I.Z});var A=o(4981),T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-menu",{attrs:{"close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:"",title:"Meu time"}},"v-btn",i,!1),s),[o("v-icon",[t._v("people")])],1)]}}])},[o("main",{staticClass:"v-sheet"},[o("v-combobox",{attrs:{items:t.searcHResults,"item-text":"name","item-value":"id",loading:t.searching,type:"search",label:"Pesquisar usuário por email"},model:{value:t.searchParams,callback:function(e){t.searchParams=e},expression:"searchParams"}}),o("v-list",{staticClass:"flat transparent"},t._l(t.users,(function(e,s){return o("v-list-item",{key:s},[o("v-list-item-icon",[o("v-icon",[t._v("person")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(e.name))])],1),o("v-list-item-action",[o("v-btn",{attrs:{icon:""},on:{click:function(o){return t.confirmRemoveUser(e)}}},[o("v-icon",[t._v("delete")])],1)],1)],1)})),1)],1),o("dialog-confirmation",{ref:"dialogConfirmation",on:{confirm:t.confirm}})],1)},L=[];const U={name:"allowed-users",props:["boardId"],components:{dialogConfirmation:C.Z},data(){return{users:[],searchParams:null,searching:!1,searcHResults:[],pendingDelete:null}},mounted(){this.$idb.boards.get(this.boardId).then((t=>{this.users=t.users??[]}))},methods:{searchUser(t){this.searching=!0,this.axios.get(`/users/${t}`,{headers:this.$auth.headers}).then((t=>{200==t.status&&(this.searcHResults=t.data)})).finally((()=>{this.searching=!1}))},addUser(t){this.users.find((e=>e.id==t.id))||this.axios.post(`/boards/${this.boardId}/users`,t,{headers:this.$auth.headers}).then((()=>{this.users.push(t)})).catch((t=>{this.$store.dispatch("openAlert",{text:"Falha adicionar usuário. Tente novamente",color:"error"})}))},confirmRemoveUser(t){this.pendingDelete=t.id,this.$refs.dialogConfirmation.open(`Deletar a coluna <strong>${t.name}</strong> ?`)},confirm(){this.pendingDelete&&this.axios.delete(`/boards/${this.boardId}/users/${this.pendingDelete}`,{headers:this.$auth.headers}).then((()=>{let t=this.users.find((t=>t.id==this.pendingDelete)),e=this.users.indexOf(t);this.users.splice(e,1)})).catch((t=>{this.$store.dispatch("openAlert",{text:"Falha remover usuário. Tente novamente",color:"error"})})).finally((()=>{this.pendingDelete=null}))}},watch:{searchParams:function(t){"string"==typeof t?this.searchUser(t):this.addUser(t)}}},F=U;var M=o(9881),O=o(6816),P=o(7620),R=o(3099),S=o(352),B=o(459),E=(0,p.Z)(F,T,L,!1,null,"25671476",null);const H=E.exports;g()(E,{VBtn:$.Z,VCombobox:M.Z,VIcon:_.Z,VList:O.Z,VListItem:P.Z,VListItemAction:R.Z,VListItemContent:S.km,VListItemIcon:B.Z,VListItemTitle:S.V9,VMenu:x.Z});var j=o(9372),q=o(9037),z=o(5495);const G={props:["id"],components:{note:N,profile:A.Z,draggable:l(),colorPicker:y,allowedUsers:H,ThemeToggler:j.Z,dialogConfirmation:C.Z},computed:{dragOptions(){return{forceFallback:!0,animation:250,tag:"section",handle:".handle",group:"columns"}}},data(){return{drag:!1,sortBy:localStorage.getItem("sortBy")??"date",pendingDelete:null,board:null,loadingNewColumn:!1,loadingNewNote:null,unsubscription:null,newNoteAdded:null,swatches:[[this.$vuetify.theme.defaults.dark.primary,this.$vuetify.theme.defaults.dark.accent,this.$vuetify.theme.defaults.dark.secondary],[this.$vuetify.theme.defaults.dark.warning,this.$vuetify.theme.defaults.dark.error,"#ffffff"]].map((t=>t.map((t=>t.toLocaleUpperCase()))))}},mounted(){this.refresh(!0)},beforeDestroy(){this.unsubscription&&this.unsubscription()},methods:{refresh(t=!1){this.$idb.boards.get(this.id).then((t=>{this.board=t,this.refreshColumnNotes()})).finally((()=>{t&&(this.fetch(),this.refreshScription())}))},onDragStart(t){this.drag=!0,document.documentElement.classList.add("grabbing")},onDragEnd(t){this.drag=!1,document.documentElement.classList.remove("grabbing"),this.$nextTick((()=>{this.changeNoteColumn(t.item,t.target,t.to,t.newIndex,t.oldIndex)}))},fetch(){this.axios.get(`/boards/${this.id}`,{headers:this.$auth.headers}).then((t=>{if(200!=t.status)return this.$router.push("/");this.board=t.data,this.refreshColumnNotes(),this.save()})).catch((t=>{console.log(t),this.$router.push("/"),this.$store.dispatch("openAlert",{text:"Falha ao obter Boards. Tente novamente",color:"error"})}))},refreshColumnNotes(){this.board.columns=this.board.columns.map((t=>(t.notes=this.board.notes.filter((e=>e.columnId==t.id)),t)))},refreshScription(){this.unsubscription&&this.unsubscription(),this.unsubscription=(0,q.jM)((0,q.iH)(z.Fs,`/boards/${this.id}`),(t=>{t.exists()&&(this.board.notes=Object.entries(t.val().notes).map((t=>(t[1].id=t[0],t[1]))),this.board.columns=Object.entries(t.val().columns).map((t=>(t[1].notes=this.board.notes.filter((e=>e.columnId==t[0])),t[1].id=t[0],t[1]))),this.board.notes.forEach((t=>{this.$refs[`note-${t.id}`]&&this.$refs[`note-${t.id}`][0]?.refresh(t)})),this.newNoteAdded&&this.$nextTick((()=>{document.querySelector(`#note-${this.newNoteAdded}`)?.scrollIntoView({behavior:"smooth"}),this.newNoteAdded=null})),this.save())}))},sort(t){t&&(localStorage.setItem("sortBy",t),this.sortBy=t),"date"==this.sortBy?this.board.columns=this.board.columns.map((t=>(t.notes=t.notes?.sort(((t,e)=>t.createdAt-e.createdAt)),t))):this.board.columns=this.board.columns.map((t=>(t.notes=t.notes?.sort(((t,e)=>(e.votes??0)-(t.votes??0))),t)))},addColumn(){this.loadingNewColumn=!0,this.axios.post(`/boards/${this.id}/columns`,{},{headers:this.$auth.headers}).then((()=>{this.$nextTick((()=>{let t=document.querySelectorAll("main section");t[t.length-1]?.scrollIntoView({behavior:"smooth"})}))})).catch((()=>{this.$store.dispatch("openAlert",{text:"Falha ao adicionar coluna. Tente novamente",color:"error"})})).finally((()=>{this.loadingNewColumn=!1}))},refreshColumnTitle(t,e){this.axios.patch(`/boards/${this.board.id}/columns/${e.id}`,{title:e.title},{headers:this.$auth.headers}).catch((()=>{this.$store.dispatch("openAlert",{text:"Falha ao salvar coluna. Tente novamente",color:"error"})}))},confirmRemoveColumn(t,e){this.pendingDelete={type:"column",id:e,columnIndex:t},this.$refs.dialogConfirmation.open(`Deletar a coluna <strong>${this.board.columns[t].title??t+1}</strong> ?`)},removeColumn(){this.pendingDelete&&this.axios.delete(`/boards/${this.board.id}/columns/${this.pendingDelete.id}`,{headers:this.$auth.headers}).then((()=>{this.pendingDelete=null})).catch((t=>{this.$store.dispatch("openAlert",{text:"Falha ao remover coluna. Tente novamente",color:"error"})}))},addNote(t,e){this.loadingNewNote=t,this.axios.post(`/boards/${this.board.id}/columns/${e}/notes`,{},{headers:this.$auth.headers}).then((t=>{this.newNoteAdded=t.data.id})).catch((t=>{this.$store.dispatch("openAlert",{text:"Falha ao adicionar nota. Tente novamente",color:"error"})})).finally((()=>{this.loadingNewNote=null}))},changeNoteColumn(t,e,o,s,i){let a=t.getAttribute("data-id"),r=o.getAttribute("data-id");if(!r)return;if(t=this.board.notes.find((t=>t.id==a)),t.columnId==r)return;let n=this.board.notes.indexOf(t);this.board.notes[n].columnId=r,this.axios.patch(`/boards/${this.board.id}/notes/${a}`,{columnId:r},{headers:this.$auth.headers}).catch((()=>{this.$store.dispatch("openAlert",{text:"Falha ao salvar coluna. Tente novamente",color:"error"})}))},confirmRemoveNote(t){this.pendingDelete={type:"note",id:t.id},this.$refs.dialogConfirmation.open(`Deletar a nota <strong>${t.text}</strong> ?`)},removeNote(){this.pendingDelete&&this.axios.delete(`/boards/${this.board.id}/notes/${this.pendingDelete.id}`,{headers:this.$auth.headers}).then((()=>{this.pendingDelete=null}))},confirm(){"column"==this.pendingDelete?.type&&this.removeColumn(),"note"==this.pendingDelete?.type&&this.removeNote()},save(){this.$idb.boards.delete(this.board.id).finally((()=>{this.$idb.boards.put(this.board)}))}},filters:{date(t){return r()(t).format("DD/MM HH:mm")}}},J=G;var K=o(1009),Q=o(5978),W=(0,p.Z)(J,s,i,!1,null,"576a72b6",null);const X=W.exports;g()(W,{VBtn:$.Z,VIcon:_.Z,VList:O.Z,VListItem:P.Z,VListItemContent:S.km,VListItemIcon:B.Z,VListItemTitle:S.V9,VMain:K.Z,VMenu:x.Z,VTextField:Q.Z})}}]);