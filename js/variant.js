ymq_define("Variant",["jquery","Config","Html"],(function(t,i,a){return class n{constructor(){var t=this;t.instance=null,t.htmlBuilder=a.getInstance(),t.config=i.getInstance(),t.addVariantIdInput().init()}initMemberVariables(){var t=this;t.variantJson={},t.variant_id=0,t.notAvailableVariantJson={},t.ymq_shopify_options_with_index_key={}}init(){this.initMemberVariables(),this.initVariantId().initNotAvailableVariantJson().initVariantJson()}initNotAvailableVariantJson(){var t=this;return t.config.product.variants.forEach((function(i){i.available||(t.notAvailableVariantJson[i.id]=i.options)})),t}isSoldOut(){var i=this,a=[],n=[];return t(".ymq-shopify-option-box").each((function(i){"3"==t(this).data("type").toString()?(n.push(1),a.push(t(this).find("select").val().join(",").toString()),t(this).find("option").prop("disabled",!1)):(n.push(0),a.push(t(this).find("input:checked").val().toString()),t(this).find("input").prop("disabled",!1))})),a.forEach((function(o,e){var r=o;i.ymq_shopify_options_with_index_key[e]&&i.ymq_shopify_options_with_index_key[e].forEach((function(o,s){var p=Object.assign([],a);o!=r&&(p[e]=o,Object.keys(i.notAvailableVariantJson).forEach((function(a){JSON.stringify(p)==JSON.stringify(i.notAvailableVariantJson[a])&&(1==n[e]?(t(`#ymq-attrib-ymq-variant-${e}`).find("option").eq(s).prop("disabled",!0),t(`#option-box-ymq-variant-${e} .ymq-multiple-ul li`).eq(s).data("title",i.config.ymq_option_branding.lan.sold_out)):t(`#ymq-attrib-ymq-variant-${e}-0`).parents(".ymq-shopify-option-box").find("input").eq(s).prop("disabled",!0).next().data("title",i.config.ymq_option_branding.lan.sold_out))})))}))})),t(".ymq-shopify-option-box select").each((function(a){i.htmlBuilder.initDropdown(t(`#ymq-attrib-ymq-variant-${a}`))})),i}initDrodownVariantJson(t,i,a=null){var n=this,o={};return o.help=a?a.help:"",o.id=`ymq-variant-${i}`,o.label=t,o.options={},o.isShopify=!0,o.optionsIndex=i,o.required="",o.tooltip=a?a.tooltip:"",o.tooltip_position=a?a.tooltip_position:"",o.type="3",o.alert_text=a&&a.hasOwnProperty("alert_text")?a.alert_text:"",o.a_t1=a&&a.hasOwnProperty("a_t1")?a.a_t1:"",o.a_t2=a&&a.hasOwnProperty("a_t2")?a.a_t2:"",o.a_width=a&&a.hasOwnProperty("a_width")?a.a_width:"",n.config.ymq_shopify_options[t].forEach((function(t,a){o.options[`${o.id}-${a}`]={id:`${o.id}-${a}`,one_time:0,price:0,price_type:"1",sku:"",value:t},n.config.util.variantIsSelect(n.config.variantData[n.variant_id].options[i],t)?o.options[`${o.id}-${a}`].default=1:o.options[`${o.id}-${a}`].default=""})),o}initRadioVariantJson(t,i,a){var n=this,o={};return o.help=a.help,o.id=`ymq-variant-${i}`,o.label=t,o.options={},o.isShopify=!0,o.optionsIndex=i,o.style=1,o.required="",o.tooltip=a.tooltip,o.tooltip_position=a.tooltip_position,o.type="4",o.alert_text=a.hasOwnProperty("alert_text")?a.alert_text:"",o.a_t1=a.hasOwnProperty("a_t1")?a.a_t1:"",o.a_t2=a.hasOwnProperty("a_t2")?a.a_t2:"",o.a_width=a.hasOwnProperty("a_width")?a.a_width:"",n.config.ymq_shopify_options[t].forEach((function(t,a){o.options[`${o.id}-${a}`]={id:`${o.id}-${a}`,one_time:0,price:0,price_type:"1",sku:"",value:t},n.config.util.variantIsSelect(n.config.variantData[n.variant_id].options[i],t)?o.options[`${o.id}-${a}`].default=1:o.options[`${o.id}-${a}`].default=""})),o}initButtonVariantJson(t,i,a){var n=this,o={};return o.help=a.help,o.id=`ymq-variant-${i}`,o.label=t,o.options={},o.isShopify=!0,o.optionsIndex=i,o.style=2,o.required="",o.tooltip=a.tooltip,o.tooltip_position=a.tooltip_position,o.type="15",o.alert_text=a.hasOwnProperty("alert_text")?a.alert_text:"",o.a_t1=a.hasOwnProperty("a_t1")?a.a_t1:"",o.a_t2=a.hasOwnProperty("a_t2")?a.a_t2:"",o.a_width=a.hasOwnProperty("a_width")?a.a_width:"",n.config.ymq_shopify_options[t].forEach((function(t,a){o.options[`${o.id}-${a}`]={id:`${o.id}-${a}`,one_time:0,price:0,price_type:"1",sku:"",value:t},n.config.util.variantIsSelect(n.config.variantData[n.variant_id].options[i],t)?o.options[`${o.id}-${a}`].default=1:o.options[`${o.id}-${a}`].default=""})),o}initCanvasVariantJson(t,i,a){var n=this,o={};return o.help=a.help,o.id=`ymq-variant-${i}`,o.label=t,o.options={},o.isShopify=!0,o.optionsIndex=i,o.style=1,o.required="",o.tooltip=a.tooltip,o.tooltip_position=a.tooltip_position,o.style=a.style,o.width=a.width,o.height=a.height,o.b_radius=a.b_radius,o.zoom=a.zoom,o.type="5",o.alert_text=a.hasOwnProperty("alert_text")?a.alert_text:"",o.a_t1=a.hasOwnProperty("a_t1")?a.a_t1:"",o.a_t2=a.hasOwnProperty("a_t2")?a.a_t2:"",o.a_width=a.hasOwnProperty("a_width")?a.a_width:"",n.config.ymq_shopify_options[t].forEach((function(t,e){o.options[`${o.id}-${e}`]={id:`${o.id}-${e}`,one_time:0,price:0,price_type:"1",sku:"",canvas1:a.values[e].canvas1,canvas2:a.values[e].canvas2,canvas_type:a.values[e].canvas_type,value:t},n.config.util.variantIsSelect(n.config.variantData[n.variant_id].options[i],t)?o.options[`${o.id}-${e}`].default=1:o.options[`${o.id}-${e}`].default=""})),o}initVariantJson(){var t=this;return console.log(t.config.ymq_variantjson,11111),t.config.ymq_has_only_default_variant||Object.keys(t.config.ymq_shopify_options).forEach((function(i,a){t.ymq_shopify_options_with_index_key[a]=t.config.ymq_shopify_options[i];var n="",o={};if(t.config.ymq_variantjson.hasOwnProperty(a)){var e=t.config.ymq_variantjson[a];n=e.type.toString()}else n=t.config.util.getValue(t.config.ymq_option_branding.extra,"init-variant-type",3).toString();switch(n){case"1":o=t.initDrodownVariantJson(i,a,e);break;case"2":o=t.initRadioVariantJson(i,a,e);break;case"3":o=t.initButtonVariantJson(i,a,e);break;case"4":o=t.initCanvasVariantJson(i,a,e);break;default:o=t.initDrodownVariantJson(i,a,e)}t.variantJson[o.id]=o})),t}buildVariantHtml(){var t=this;return t.config.ymq_has_only_default_variant||t.htmlBuilder.setJson(t.variantJson).buildtHtml(),t}initVariantId(){var t=this;if(t.variant_id=Number(t.config.util.getUrlParam("variant")),t.variant_id&&t.config.variantData.hasOwnProperty(t.variant_id)||(t.variant_id=Number(t.config.product.variants[0].id)),t.changeVariantId(),!t.config.variantData[t.variant_id].available)try{Object.keys(t.config.variantData).forEach((function(i){if(t.config.variantData[i].available)throw t.variant_id=Number(i),t.changeVariantId(),t.config.util.changeUriByVariantId(t.variant_id),new Error("LoopTerminates")}))}catch(t){if("LoopTerminates"!==t.message)throw t}return t}changeUriByVariantId(){var i=this,a=[],n={},o=[];t(".shopify-payment-button").hide().remove(),t(".ymq-shopify-option-box").each((function(){var i=t(this).find(".ymq_lable").text();"3"==t(this).data("type").toString()?t(this).find(".ymq-shopify-option").each((function(){a.push(t(this).val().toString()),n[i]=t(this).val().toString(),o.push(t(this).val().toString())})):t(this).find(".ymq-shopify-option:checked").each((function(){a.push(t(this).val().toString()),n[i]=t(this).val().toString(),o.push(t(this).val().toString())}))}));var e=i.config.util.getValue(i.config.ymq_option_branding.extra,"trigger-select",""),r=i.config.util.getValue(i.config.ymq_option_branding.extra,"trigger-select-join","");return""!=e&&(t(e).val(o.join(r)).trigger("change"),i.config.util.jstrigger(t(e).get(0),"change")),Object.keys(n).forEach((function(a,o){var e=n[a];if(i.config.shopifySelectDom[a]&&"select"==i.config.shopifySelectDom[a].type){i.config.shopifySelectDom[a].jq.find("option").each((function(){t(this).val()==e?t(this).prop("selected",!0).trigger("click"):t(this).prop("selected",!1)})),i.config.shopifySelectDom[a].jq.val(e).trigger("change");var r=document.getElementById(i.config.shopifySelectDom[a].id);i.config.util.jstrigger(r,"change")}i.config.shopifySelectDom[a]&&"radio"==i.config.shopifySelectDom[a].type&&i.config.shopifySelectDom[a].jq.each((function(n){if(t(this).val()==e){t(this).prop("checked",!0).trigger("click");var o=document.getElementsByName(i.config.shopifySelectDom[a].name)[n];i.config.shopifySelectDom[a].jq.trigger("change"),i.config.util.jstrigger(o,"change")}else t(this).prop("checked",!1)}))})),i.config.product.variants.forEach((function(t){JSON.stringify(t.options)==JSON.stringify(a)&&(i.variant_id=Number(t.id),i.changeVariantId())})),i.config.util.changeUriByVariantId(i.variant_id),i}addVariantIdInput(){var i=this;if(!t(`#${i.config.ymq_variant_id}`).length){var a=`\n\t\t\t\t\t<input id="${i.config.ymq_variant_id}" type="hidden" name="id" value="">\n\t\t\t\t`;t(i.config.form_box).append(a)}return i}changeVariantId(){t(`#${this.config.ymq_variant_id}`).val(this.variant_id)}static getInstance(){return this.instance||(this.instance=new n),this.instance}}}));