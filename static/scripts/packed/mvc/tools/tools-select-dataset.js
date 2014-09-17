define(["utils/utils","mvc/ui/ui-misc","mvc/ui/ui-tabs"],function(b,d,a){var c=Backbone.View.extend({initialize:function(m,g){var f=this;this.tabs=new a.View({onchange:function(){f.trigger("change")}});var k=m.datasets.filterType({content_type:"dataset",data_types:g.extensions});var j=[];for(var h in k){j.push({label:k[h].get("name"),value:k[h].get("id")})}this.select_datasets=new d.Select.View({multiple:true,data:j,value:j[0]&&j[0].value,onchange:function(){f.trigger("change")}});this.tabs.add({id:"datasets",title:"Select datasets",$el:this.select_datasets.$el});var l=m.datasets.filterType({content_type:"collection",data_types:g.extensions});var e=[];for(var h in l){e.push({label:l[h].get("name"),value:l[h].get("id")})}this.select_collection=new d.Select.View({data:e,value:e[0]&&e[0].value,onchange:function(){f.trigger("change")}});this.tabs.add({id:"collection",title:"Select a dataset collection",$el:this.select_collection.$el});this.setElement(this.tabs.$el);this.on("change",function(){if(g.onchange){g.onchange(f.value())}})},value:function(e){var f=this.tabs.current();switch(f){case"datasets":return this.select_datasets.value();case"collection":return this.select_collection.value()}},update:function(e){this.select.update(e)}});return{View:c}});