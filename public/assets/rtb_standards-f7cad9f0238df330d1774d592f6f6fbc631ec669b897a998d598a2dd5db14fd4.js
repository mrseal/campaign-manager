(function(){var e;e="undefined"!=typeof exports&&null!==exports?exports:this,$(document).ready(function(){return console.log("Loading rtb_standards coffeescript"),$("select.nosearch").select2({minimumResultsForSearch:1/0,width:"100%"}),$("select.select2_single").select2({tags:!0,allowClear:!0,include_blank:!0,placeholder:"Select or enter value, type to filter list",width:"100%"}),$("select.select2_multiple").select2({tags:!0,multiple:"multiple",allowClear:!0,include_blank:!0,placeholder:"Select or enter value",width:"100%"}),$("#rtb_standard_operator").on("select2:select",function(){var e,t,l;if(e=$(this).val(),t=null,l=null,e.match(/^(EQUALS|NOT_EQUALS|LESS_THAN|LESS_THAN_EQUALS|GREATER_THAN|GREATER_THAN_EQUALS)$/)?t="Scalar":e.match(/^(INTERSECTS|NOT_INTERSECTS|MEMBER|NOT_MEMBER)$/)?t="List":e.match(/^(STRINGIN|NOT_STRINGIN)$/)?(t="Scalar",l="String"):e.match(/^(INRANGE|NOT_INRANGE)$/)?(t="List",l="Double"):e.match(/^(EXISTS|NOT_EXISTS)$/)?(t="",l=""):(t=null,l=null),(l||""===l)&&$("#rtb_standard_operand_type option").filter(function(){return this.text===l}).attr("selected",!0).trigger("change"),t||""===t)return $("#rtb_standard_operand_ordinal option").filter(function(){return this.text===t}).attr("selected",!0).trigger("change")})})}).call(this);