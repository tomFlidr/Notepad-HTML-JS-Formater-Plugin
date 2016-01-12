(function(){

	/**
	 *
	 * JSBeautifier | http://jsbeautifier.org/
	 * (minimized whitespaces only)
	 *
	 * beautify.js
	 * beautify-html.js
	 * tests/sanitytest.js
	 * tests/beautify-tests.js
	 * unpackers/javascriptobfuscator_unpacker.js
	 * unpackers/urlencode_unpacker.js
	 * unpackers/p_a_c_k_e_r_unpacker.js
	 * unpackers/myobfuscate_unpacker.js
	 *
	*/

function js_beautify(a,e){function p(d){for(d=typeof d==="undefined"?false:d;o.length&&(o[o.length-1]===" "||o[o.length-1]===F||d&&(o[o.length-1]==="\n"||o[o.length-1]==="\r"));)o.pop()}function f(d){c.eat_next_space=false;if(!(z&&q(c.mode))){d=typeof d==="undefined"?true:d;c.if_line=false;p();if(o.length){if(o[o.length-1]!=="\n"||!d){D=true;o.push("\n")}for(d=0;d<c.indentation_level;d+=1)o.push(F);if(c.var_line&&c.var_line_reindented)R===" "?o.push("\t"):o.push(F)}}}function n(){if(c.eat_next_space)c.eat_next_space=
false;else{var d=" ";if(o.length)d=o[o.length-1];d!==" "&&d!=="\n"&&d!==F&&o.push(" ")}}function b(){D=false;c.eat_next_space=false;o.push(r)}function h(){o.length&&o[o.length-1]===F&&o.pop()}function i(d){c&&L.push(c);c={previous_mode:c?c.mode:"BLOCK",mode:d,var_line:false,var_line_tainted:false,var_line_reindented:false,in_html_comment:false,if_line:false,in_case:false,eat_next_space:false,indentation_baseline:-1,indentation_level:c?c.indentation_level+(c.var_line&&c.var_line_reindented?1:0):U,
ternary_depth:0}}function q(d){return d==="[EXPRESSION]"||d==="[INDENTED-EXPRESSION]"}function y(d){return d==="[EXPRESSION]"||d==="[INDENTED-EXPRESSION]"||d==="(EXPRESSION)"}function G(){M=c.mode==="DO_BLOCK";if(L.length>0)c=L.pop()}function s(d,t){for(var u=0;u<t.length;u+=1)if(t[u]===d)return true;return false}function J(){A=0;if(g>=w)return["","TK_EOF"];K=false;var d=m.charAt(g);g+=1;if(z&&q(c.mode)){for(var t=0;s(d,O);){if(d==="\n"){p();o.push("\n");D=true;t=0}else if(d==="\t")t+=4;else if(d!==
"\r")t+=1;if(g>=w)return["","TK_EOF"];d=m.charAt(g);g+=1}if(c.indentation_baseline===-1)c.indentation_baseline=t;if(D){var u;for(u=0;u<c.indentation_level+1;u+=1)o.push(F);if(c.indentation_baseline!==-1)for(u=0;u<t-c.indentation_baseline;u++)o.push(" ")}}else{for(;s(d,O);){if(d==="\n")A+=S?A<=S?1:0:1;if(g>=w)return["","TK_EOF"];d=m.charAt(g);g+=1}if(P)if(A>1)for(u=0;u<A;u+=1){f(u===0);D=true}K=A>0}if(s(d,N)){if(g<w)for(;s(m.charAt(g),N);){d+=m.charAt(g);g+=1;if(g===w)break}if(g!==w&&d.match(/^[0-9]+[Ee]$/)&&
(m.charAt(g)==="-"||m.charAt(g)==="+")){t=m.charAt(g);g+=1;u=J(g);d+=t+u[0];return[d,"TK_WORD"]}if(d==="in")return[d,"TK_OPERATOR"];if(K&&j!=="TK_OPERATOR"&&j!=="TK_EQUALS"&&!c.if_line&&(P||l!=="var"))f();return[d,"TK_WORD"]}if(d==="("||d==="[")return[d,"TK_START_EXPR"];if(d===")"||d==="]")return[d,"TK_END_EXPR"];if(d==="{")return[d,"TK_START_BLOCK"];if(d==="}")return[d,"TK_END_BLOCK"];if(d===";")return[d,"TK_SEMICOLON"];if(d==="/"){t="";u=true;if(m.charAt(g)==="*"){g+=1;if(g<w)for(;!(m.charAt(g)===
"*"&&m.charAt(g+1)&&m.charAt(g+1)==="/")&&g<w;){d=m.charAt(g);t+=d;if(d==="\r"||d==="\n")u=false;g+=1;if(g>=w)break}g+=2;return u?["/*"+t+"*/","TK_INLINE_COMMENT"]:["/*"+t+"*/","TK_BLOCK_COMMENT"]}if(m.charAt(g)==="/"){for(t=d;m.charAt(g)!=="\r"&&m.charAt(g)!=="\n";){t+=m.charAt(g);g+=1;if(g>=w)break}g+=1;K&&f();return[t,"TK_COMMENT"]}}if(d==="'"||d==='"'||d==="/"&&(j==="TK_WORD"&&s(l,["return","do"])||j==="TK_COMMENT"||j==="TK_START_EXPR"||j==="TK_START_BLOCK"||j==="TK_END_BLOCK"||j==="TK_OPERATOR"||
j==="TK_EQUALS"||j==="TK_EOF"||j==="TK_SEMICOLON")){t=d;u=false;var B=d;if(g<w)if(t==="/")for(d=false;u||d||m.charAt(g)!==t;){B+=m.charAt(g);if(u)u=false;else{u=m.charAt(g)==="\\";if(m.charAt(g)==="[")d=true;else if(m.charAt(g)==="]")d=false}g+=1;if(g>=w)return[B,"TK_STRING"]}else for(;u||m.charAt(g)!==t;){B+=m.charAt(g);u=u?false:m.charAt(g)==="\\";g+=1;if(g>=w)return[B,"TK_STRING"]}g+=1;B+=t;if(t==="/")for(;g<w&&s(m.charAt(g),N);){B+=m.charAt(g);g+=1}return[B,"TK_STRING"]}if(d==="#"){if(o.length===
0&&m.charAt(g)==="!"){for(B=d;g<w&&d!="\n";){d=m.charAt(g);B+=d;g+=1}o.push(B.replace(/^\s\s*|\s\s*$/,"")+"\n");f();return J()}t="#";if(g<w&&s(m.charAt(g),T)){do{d=m.charAt(g);t+=d;g+=1}while(g<w&&d!=="#"&&d!=="=");if(d!=="#")if(m.charAt(g)==="["&&m.charAt(g+1)==="]"){t+="[]";g+=2}else if(m.charAt(g)==="{"&&m.charAt(g+1)==="}"){t+="{}";g+=2}return[t,"TK_WORD"]}}if(d==="<"&&m.substring(g-1,g+3)==="<!--"){g+=3;c.in_html_comment=true;return["<!--","TK_COMMENT"]}if(d==="-"&&c.in_html_comment&&m.substring(g-
1,g+2)==="--\>"){c.in_html_comment=false;g+=2;K&&f();return["--\>","TK_COMMENT"]}if(s(d,Q)){for(;g<w&&s(d+m.charAt(g),Q);){d+=m.charAt(g);g+=1;if(g>=w)break}return d==="="?[d,"TK_EQUALS"]:[d,"TK_OPERATOR"]}return[d,"TK_UNKNOWN"]}var m,o,r,j,l,x,E,c,L,F,O,N,Q,g,H,T,v,I,M,K,D,A;e=e?e:{};var C;if(e.space_after_anon_function!==undefined&&e.jslint_happy===undefined)e.jslint_happy=e.space_after_anon_function;if(e.braces_on_own_line!==undefined)C=e.braces_on_own_line?"expand":"collapse";C=e.brace_style?
e.brace_style:C?C:"collapse";E=e.indent_size?e.indent_size:4;var R=e.indent_char?e.indent_char:" ",P=typeof e.preserve_newlines==="undefined"?true:e.preserve_newlines,S=typeof e.max_preserve_newlines==="undefined"?false:e.max_preserve_newlines,U=e.indent_level?e.indent_level:0,V=e.jslint_happy==="undefined"?false:e.jslint_happy,z=typeof e.keep_array_indentation==="undefined"?false:e.keep_array_indentation;D=false;var w=a.length;for(F="";E>0;){F+=R;E-=1}m=a;E="";j="TK_START_EXPR";x=l="";o=[];M=false;
O="\n\r\t ".split("");N="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_$".split("");T="0123456789".split("");Q="+ - * / % & ++ -- = += -= *= /= %= == === != !== > < >= <= >> << >>> >>>= >>= <<= && &= | || ! !! , : ? ^ ^= |= ::".split(" ");H="continue,try,throw,return,var,if,switch,case,default,for,while,break,function".split(",");L=[];i("BLOCK");for(g=0;;){I=J(g);r=I[0];I=I[1];if(I==="TK_EOF")break;switch(I){case "TK_START_EXPR":if(r==="["){if(j==="TK_WORD"||l===")"){s(l,H)&&n();
i("(EXPRESSION)");b();break}if(c.mode==="[EXPRESSION]"||c.mode==="[INDENTED-EXPRESSION]")if(x==="]"&&l===","){if(c.mode==="[EXPRESSION]"){c.mode="[INDENTED-EXPRESSION]";z||(c.indentation_level+=1)}i("[EXPRESSION]");z||f()}else if(l==="["){if(c.mode==="[EXPRESSION]"){c.mode="[INDENTED-EXPRESSION]";z||(c.indentation_level+=1)}i("[EXPRESSION]");z||f()}else i("[EXPRESSION]");else i("[EXPRESSION]")}else i("(EXPRESSION)");if(l===";"||j==="TK_START_BLOCK")f();else if(!(j==="TK_END_EXPR"||j==="TK_START_EXPR"||
j==="TK_END_BLOCK"||l==="."))if(j!=="TK_WORD"&&j!=="TK_OPERATOR")n();else if(E==="function"||E==="typeof")V&&n();else if(s(l,H)||l==="catch")n();b();break;case "TK_END_EXPR":if(r==="]")if(z){if(l==="}"){h();b();G();break}}else if(c.mode==="[INDENTED-EXPRESSION]")if(l==="]"){G();f();b();break}G();b();break;case "TK_START_BLOCK":E==="do"?i("DO_BLOCK"):i("BLOCK");if(C=="expand"){if(j!=="TK_OPERATOR")l==="return"||l==="="?n():f(true);b();c.indentation_level+=1}else{if(j!=="TK_OPERATOR"&&j!=="TK_START_EXPR")j===
"TK_START_BLOCK"?f():n();else if(q(c.previous_mode)&&l===",")x==="}"?n():f();c.indentation_level+=1;b()}break;case "TK_END_BLOCK":G();if(C=="expand")l!=="{"&&f();else if(j==="TK_START_BLOCK")D?h():p();else if(q(c.mode)&&z){z=false;f();z=true}else f();b();break;case "TK_WORD":if(M){n();b();n();M=false;break}if(r==="function"){if(c.var_line)c.var_line_reindented=true;if((D||l===";")&&l!=="{"){A=D?A:0;P||(A=1);for(v=0;v<2-A;v++)f(false)}}if(r==="case"||r==="default"){if(l===":")h();else{c.indentation_level--;
f();c.indentation_level++}b();c.in_case=true;break}v="NONE";if(j==="TK_END_BLOCK")if(s(r.toLowerCase(),["else","catch","finally"]))if(C=="expand"||C=="end-expand")v="NEWLINE";else{v="SPACE";n()}else v="NEWLINE";else if(j==="TK_SEMICOLON"&&(c.mode==="BLOCK"||c.mode==="DO_BLOCK"))v="NEWLINE";else if(j==="TK_SEMICOLON"&&y(c.mode))v="SPACE";else if(j==="TK_STRING")v="NEWLINE";else if(j==="TK_WORD"){l==="else"&&p(true);v="SPACE"}else if(j==="TK_START_BLOCK")v="NEWLINE";else if(j==="TK_END_EXPR"){n();v=
"NEWLINE"}if(s(r,H)&&l!==")")v=l=="else"?"SPACE":"NEWLINE";if(c.if_line&&j==="TK_END_EXPR")c.if_line=false;if(s(r.toLowerCase(),["else","catch","finally"]))if(j!=="TK_END_BLOCK"||C=="expand"||C=="end-expand")f();else{p(true);n()}else if(v==="NEWLINE"){if(!((j==="TK_START_EXPR"||l==="="||l===",")&&r==="function"))if(r==="function"&&l=="new")n();else if(l==="return"||l==="throw")n();else if(j!=="TK_END_EXPR"){if((j!=="TK_START_EXPR"||r!=="var")&&l!==":")if(r==="if"&&E==="else"&&l!=="{")n();else{c.var_line=
false;c.var_line_reindented=false;f()}}else if(s(r,H)&&l!=")"){c.var_line=false;c.var_line_reindented=false;f()}}else if(q(c.mode)&&l===","&&x==="}")f();else v==="SPACE"&&n();b();E=r;if(r==="var"){c.var_line=true;c.var_line_reindented=false;c.var_line_tainted=false}if(r==="if")c.if_line=true;if(r==="else")c.if_line=false;break;case "TK_SEMICOLON":b();c.var_line=false;c.var_line_reindented=false;if(c.mode=="OBJECT")c.mode="BLOCK";break;case "TK_STRING":if(j==="TK_START_BLOCK"||j==="TK_END_BLOCK"||
j==="TK_SEMICOLON")f();else j==="TK_WORD"&&n();b();break;case "TK_EQUALS":if(c.var_line)c.var_line_tainted=true;n();b();n();break;case "TK_OPERATOR":v=x=true;if(c.var_line&&r===","&&y(c.mode))c.var_line_tainted=false;if(c.var_line)if(r===",")if(c.var_line_tainted){b();c.var_line_reindented=true;c.var_line_tainted=false;f();break}else c.var_line_tainted=false;if(l==="return"||l==="throw"){n();b();break}if(r===":"&&c.in_case){b();f();c.in_case=false;break}if(r==="::"){b();break}if(r===","){if(c.var_line)if(c.var_line_tainted){b();
f();c.var_line_tainted=false}else{b();n()}else if(j==="TK_END_BLOCK"&&c.mode!=="(EXPRESSION)"){b();c.mode==="OBJECT"&&l==="}"?f():n()}else if(c.mode==="OBJECT"){b();f()}else{b();n()}break}else if(s(r,["--","++","!"])||s(r,["-","+"])&&(s(j,["TK_START_BLOCK","TK_START_EXPR","TK_EQUALS","TK_OPERATOR"])||s(l,H))){v=x=false;if(l===";"&&y(c.mode))x=true;if(j==="TK_WORD"&&s(l,H))x=true;if(c.mode==="BLOCK"&&(l==="{"||l===";"))f()}else if(r===".")x=false;else if(r===":")if(c.ternary_depth==0){c.mode="OBJECT";
x=false}else c.ternary_depth-=1;else if(r==="?")c.ternary_depth+=1;x&&n();b();v&&n();break;case "TK_BLOCK_COMMENT":x=r.split(/\x0a|\x0d\x0a/);if(/^\/\*\*/.test(r)){f();o.push(x[0]);for(v=1;v<x.length;v++){f();o.push(" ");o.push(x[v].replace(/^\s\s*|\s\s*$/,""))}}else{if(x.length>1){f();p()}else n();for(v=0;v<x.length;v++){o.push(x[v]);o.push("\n")}}f();break;case "TK_INLINE_COMMENT":n();b();y(c.mode)?n():f();break;case "TK_COMMENT":K?f():n();b();f();break;case "TK_UNKNOWN":if(l==="return"||l==="throw")n();
b()}x=l;j=I;l=r}return o.join("").replace(/[\n ]+$/,"")}if(typeof exports!=="undefined")exports.js_beautify=js_beautify;
function style_html(a,e,p,f,n){f=new function(){this.pos=0;this.token="";this.current_mode="CONTENT";this.tags={parent:"parent1",parentcount:1,parent1:""};this.token_text=this.last_token=this.last_text=this.token_type=this.tag_type="";this.Utils={whitespace:"\n\r\t ".split(""),single_token:"br,input,link,meta,!doctype,basefont,base,area,hr,wbr,param,img,isindex,?xml,embed".split(","),extra_liners:"head,body,/html".split(","),in_array:function(b,h){for(var i=0;i<h.length;i++)if(b===h[i])return true;
return false}};this.get_content=function(){for(var b="",h=[],i=false;this.input.charAt(this.pos)!=="<";){if(this.pos>=this.input.length)return h.length?h.join(""):["","TK_EOF"];b=this.input.charAt(this.pos);this.pos++;this.line_char_count++;if(this.Utils.in_array(b,this.Utils.whitespace)){if(h.length)i=true;this.line_char_count--}else{if(i){if(this.line_char_count>=this.max_char){h.push("\n");for(i=0;i<this.indent_level;i++)h.push(this.indent_string);this.line_char_count=0}else{h.push(" ");this.line_char_count++}i=
false}h.push(b)}}return h.length?h.join(""):""};this.get_script=function(){var b="",h=[];b=RegExp("<\/script>","igm");b.lastIndex=this.pos;for(var i=(b=b.exec(this.input))?b.index:this.input.length;this.pos<i;){if(this.pos>=this.input.length)return h.length?h.join(""):["","TK_EOF"];b=this.input.charAt(this.pos);this.pos++;h.push(b)}return h.length?h.join(""):""};this.record_tag=function(b){if(this.tags[b+"count"])this.tags[b+"count"]++;else this.tags[b+"count"]=1;this.tags[b+this.tags[b+"count"]]=
this.indent_level;this.tags[b+this.tags[b+"count"]+"parent"]=this.tags.parent;this.tags.parent=b+this.tags[b+"count"]};this.retrieve_tag=function(b){if(this.tags[b+"count"]){for(var h=this.tags.parent;h;){if(b+this.tags[b+"count"]===h)break;h=this.tags[h+"parent"]}if(h){this.indent_level=this.tags[b+this.tags[b+"count"]];this.tags.parent=this.tags[h+"parent"]}delete this.tags[b+this.tags[b+"count"]+"parent"];delete this.tags[b+this.tags[b+"count"]];if(this.tags[b+"count"]==1)delete this.tags[b+"count"];
else this.tags[b+"count"]--}};this.get_tag=function(){var b="",h=[],i=false;do{if(this.pos>=this.input.length)return h.length?h.join(""):["","TK_EOF"];b=this.input.charAt(this.pos);this.pos++;this.line_char_count++;if(this.Utils.in_array(b,this.Utils.whitespace)){i=true;this.line_char_count--}else{if(b==="'"||b==='"')if(!h[1]||h[1]!=="!"){b+=this.get_unformatted(b);i=true}if(b==="=")i=false;if(h.length&&h[h.length-1]!=="="&&b!==">"&&i){if(this.line_char_count>=this.max_char){this.print_newline(false,
h);this.line_char_count=0}else{h.push(" ");this.line_char_count++}i=false}h.push(b)}}while(b!==">");b=h.join("");i=b.indexOf(" ")!=-1?b.indexOf(" "):b.indexOf(">");i=b.substring(1,i).toLowerCase();if(b.charAt(b.length-2)==="/"||this.Utils.in_array(i,this.Utils.single_token))this.tag_type="SINGLE";else if(i==="script"){this.record_tag(i);this.tag_type="SCRIPT"}else if(i==="style"){this.record_tag(i);this.tag_type="STYLE"}else if(i==="a"){b=this.get_unformatted("</a>",b);h.push(b);this.tag_type="SINGLE"}else if(i.charAt(0)===
"!")if(i.indexOf("[if")!=-1){if(b.indexOf("!IE")!=-1){b=this.get_unformatted("--\>",b);h.push(b)}this.tag_type="START"}else if(i.indexOf("[endif")!=-1){this.tag_type="END";this.unindent()}else{b=i.indexOf("[cdata[")!=-1?this.get_unformatted("]]\>",b):this.get_unformatted("--\>",b);h.push(b);this.tag_type="SINGLE"}else{if(i.charAt(0)==="/"){this.retrieve_tag(i.substring(1));this.tag_type="END"}else{this.record_tag(i);this.tag_type="START"}this.Utils.in_array(i,this.Utils.extra_liners)&&this.print_newline(true,
this.output)}return h.join("")};this.get_unformatted=function(b,h){if(h&&h.indexOf(b)!=-1)return"";var i="",q="",y=true;do{if(this.pos>=this.input.length)break;i=this.input.charAt(this.pos);this.pos++;if(this.Utils.in_array(i,this.Utils.whitespace)){if(!y){this.line_char_count--;continue}if(i==="\n"||i==="\r"){q+="\n";for(i=0;i<this.indent_level;i++)q+=this.indent_string;y=false;this.line_char_count=0;continue}}q+=i;this.line_char_count++;y=true}while(q.indexOf(b)==-1);return q};this.get_token=function(){var b;
if(this.last_token==="TK_TAG_SCRIPT"){b=this.get_script();if(typeof b!=="string")return b;b=js_beautify(b,{indent_size:this.indent_size,indent_char:this.indent_character,indent_level:this.indent_level,brace_style:this.brace_style});return[b,"TK_CONTENT"]}if(this.current_mode==="CONTENT"){b=this.get_content();return typeof b!=="string"?b:[b,"TK_CONTENT"]}if(this.current_mode==="TAG"){b=this.get_tag();return typeof b!=="string"?b:[b,"TK_TAG_"+this.tag_type]}};this.printer=function(b,h,i,q,y){this.input=
b||"";this.output=[];this.indent_character=h||" ";this.indent_string="";this.indent_size=i||2;this.brace_style=y||"collapse";this.indent_level=0;this.max_char=q||70;for(b=this.line_char_count=0;b<this.indent_size;b++)this.indent_string+=this.indent_character;this.print_newline=function(G,s){this.line_char_count=0;if(s&&s.length){if(!G)for(;this.Utils.in_array(s[s.length-1],this.Utils.whitespace);)s.pop();s.push("\n");for(var J=0;J<this.indent_level;J++)s.push(this.indent_string)}};this.print_token=
function(G){this.output.push(G)};this.indent=function(){this.indent_level++};this.unindent=function(){this.indent_level>0&&this.indent_level--}};return this};for(f.printer(a,p,e,80,n);;){a=f.get_token();f.token_text=a[0];f.token_type=a[1];if(f.token_type==="TK_EOF")break;switch(f.token_type){case "TK_TAG_START":case "TK_TAG_SCRIPT":case "TK_TAG_STYLE":f.print_newline(false,f.output);f.print_token(f.token_text);f.indent();f.current_mode="CONTENT";break;case "TK_TAG_END":f.print_newline(true,f.output);
f.print_token(f.token_text);f.current_mode="CONTENT";break;case "TK_TAG_SINGLE":f.print_newline(false,f.output);f.print_token(f.token_text);f.current_mode="CONTENT";break;case "TK_CONTENT":if(f.token_text!==""){f.print_newline(false,f.output);f.print_token(f.token_text)}f.current_mode="TAG"}f.last_token=f.token_type;f.last_text=f.token_text}return f.output.join("")}
function SanityTest(a,e){var p=a||function(h){return h};e=e||"";var f=0,n=0,b=[];this.test_function=function(h,i){p=h;e=i||""};this.expect=function(h,i){var q=p(h);if(q===i||i instanceof Array&&q.join(", ")==i.join(", "))n+=1;else{f+=1;b.push([e,h,i,q])}};this.results_raw=function(){var h="";if(f===0)h=n===0?"No tests run.":"All "+n+" tests passed.";else{for(var i=0;i<b.length;i++){var q=b[i];if(q[0])q[0]+=" ";h+="---- "+q[0]+"input -------\n"+this.prettyprint(q[1])+"\n";h+="---- "+q[0]+"expected ----\n"+
this.prettyprint(q[2])+"\n";h+="---- "+q[0]+"output ------\n"+this.prettyprint(q[3])+"\n\n"}h+=f+" tests failed.\n"}return h};this.results=function(){return this.lazy_escape(this.results_raw())};this.prettyprint=function(h,i){var q=typeof h;switch(q.toLowerCase()){case "string":return i?"'"+h.replace("'","\\'")+"'":h;case "number":return""+h;case "boolean":return h?"true":"false";case "undefined":return"undefined";case "object":if(h instanceof Array){q=[];var y=0;for(k in h)if(k==y){q.push(this.prettyprint(h[k],
true));y+=1}else q.push("\n"+k+": "+this.prettyprint(h[k],true));return"["+q.join(", ")+"]"}else return"object: "+h;default:return q+": "+h}};this.lazy_escape=function(h){return h.replace(/</g,"&lt;").replace(/\>/g,"&gt;").replace(/\n/g,"<br />")};this.log=function(){if(window.console)console.firebug?console.log.apply(console,Array.prototype.slice.call(arguments)):console.log.call(console,Array.prototype.slice.call(arguments))}}
opts={indent_size:4,indent_char:" ",preserve_newlines:true,jslint_happy:false,keep_array_indentation:false,brace_style:"collapse"};function test_beautifier(a){return js_beautify(a,opts)}var sanitytest;function test_fragment(a,e){e=e||a;sanitytest.expect(a,e)}function bt(a,e){var p,f;e=e||a;test_fragment(a,e);if(opts.indent_size===4&&a){p="{\n"+a+"\nfoo=bar;}";f="{\n"+e.replace(/^(.+)$/mg,"\t$1")+"\n\tfoo = bar;\n}";test_fragment(p,f)}}
function bt_braces(a,e){var p=opts.brace_style;opts.brace_style="expand";bt(a,e);opts.brace_style=p}
function run_beautifier_tests(a){sanitytest=a||new SanityTest;sanitytest.test_function(test_beautifier,"js_beautify");opts.indent_size=4;opts.indent_char=" ";opts.preserve_newlines=true;opts.jslint_happy=false;opts.keep_array_indentation=false;opts.brace_style="collapse";bt("");bt("return .5");bt("a\t\t=\t\t  1","a = 1");bt("a=1","a = 1");bt("a();\n\nb();","a();\n\nb();");bt("var a = 1 var b = 2","var a = 1\nvar b = 2");bt("var a=1, b=c[d], e=6;","var a = 1,\n\tb = c[d],\n\te = 6;");bt('a = " 12345 "');
bt("a = ' 12345 '");bt("if (a == 1) b = 2;","if (a == 1) b = 2;");bt("if(1){2}else{3}","if (1) {\n\t2\n} else {\n\t3\n}");bt("if (foo) bar();\nelse\ncar();","if (foo) bar();\nelse car();");bt("if(1||2);","if (1 || 2);");bt("(a==1)||(b==2)","(a == 1) || (b == 2)");bt("var a = 1 if (2) 3;","var a = 1\nif (2) 3;");bt("a = a + 1");bt("a = a == 1");bt("/12345[^678]*9+/.match(a)");bt("a /= 5");bt("a = 0.5 * 3");bt("a *= 10.55");bt("a < .5");bt("a <= .5");bt("a<.5","a < .5");bt("a<=.5","a <= .5");bt("a = 0xff;");
bt("a=0xff+4","a = 0xff + 4");bt("a = [1, 2, 3, 4]");bt("F*(g/=f)*g+b","F * (g /= f) * g + b");bt("a.b({c:d})","a.b({\n\tc: d\n})");bt("a.b\n(\n{\nc:\nd\n}\n)","a.b({\n\tc: d\n})");bt("a=!b","a = !b");bt("a?b:c","a ? b : c");bt("a?1:2","a ? 1 : 2");bt("a?(b):c","a ? (b) : c");bt('x={a:1,b:w=="foo"?x:y,c:z}','x = {\n\ta: 1,\n\tb: w == "foo" ? x : y,\n\tc: z\n}');bt("x=a?b?c?d:e:f:g;","x = a ? b ? c ? d : e : f : g;");bt("x=a?b?c?d:{e1:1,e2:2}:f:g;","x = a ? b ? c ? d : {\n\te1: 1,\n\te2: 2\n} : f : g;");
bt("function void(void) {}");bt("if(!a)foo();","if (!a) foo();");bt("a=~a","a = ~a");bt("a;/*comment*/b;","a; /*comment*/\nb;");bt("a;/* comment */b;","a; /* comment */\nb;");test_fragment("a;/*\ncomment\n*/b;","a;\n/*\ncomment\n*/\nb;");bt("a;/**\n* javadoc\n*/b;","a;\n/**\n * javadoc\n */\nb;");bt("if(a)break;","if (a) break;");bt("if(a){break}","if (a) {\n\tbreak\n}");bt("if((a))foo();","if ((a)) foo();");bt("for(var i=0;;)","for (var i = 0;;)");bt("a++;","a++;");bt("for(;;i++)","for (;; i++)");
bt("for(;;++i)","for (;; ++i)");bt("return(1)","return (1)");bt("try{a();}catch(b){c();}finally{d();}","try {\n\ta();\n} catch (b) {\n\tc();\n} finally {\n\td();\n}");bt("(xx)()");bt("a[1]()");bt("if(a){b();}else if(c) foo();","if (a) {\n\tb();\n} else if (c) foo();");bt("switch(x) {case 0: case 1: a(); break; default: break}","switch (x) {\ncase 0:\ncase 1:\n\ta();\n\tbreak;\ndefault:\n\tbreak\n}");bt("switch(x){case -1:break;case !y:break;}","switch (x) {\ncase -1:\n\tbreak;\ncase !y:\n\tbreak;\n}");
bt("a !== b");bt("if (a) b(); else c();","if (a) b();\nelse c();");bt("// comment\n(function something() {})");bt("{\n\n\tx();\n\n}");bt("if (a in b) foo();");bt("{a:1, b:2}","{\n\ta: 1,\n\tb: 2\n}");bt("a={1:[-1],2:[+1]}","a = {\n\t1: [-1],\n\t2: [+1]\n}");bt("var l = {'a':'1', 'b':'2'}","var l = {\n\t'a': '1',\n\t'b': '2'\n}");bt("if (template.user[n] in bk) foo();");bt("{{}/z/}","{\n\t{}\n\t/z/\n}");bt("return 45","return 45");bt("If[1]","If[1]");bt("Then[1]","Then[1]");bt("a = 1e10","a = 1e10");
bt("a = 1.3e10","a = 1.3e10");bt("a = 1.3e-10","a = 1.3e-10");bt("a = -1.3e-10","a = -1.3e-10");bt("a = 1e-10","a = 1e-10");bt("a = e - 10","a = e - 10");bt("a = 11-10","a = 11 - 10");bt("a = 1;// comment\n","a = 1; // comment");bt("a = 1; // comment\n","a = 1; // comment");bt("a = 1;\n // comment\n","a = 1;\n// comment");bt("o = [{a:b},{c:d}]","o = [{\n\ta: b\n}, {\n\tc: d\n}]");bt("if (a) {\n\tdo();\n}");bt("if\n(a)\nb();","if (a) b();");bt("if (a) {\n// comment\n}else{\n// comment\n}","if (a) {\n\t// comment\n} else {\n\t// comment\n}");
bt("if (a) {\n// comment\n// comment\n}","if (a) {\n\t// comment\n\t// comment\n}");bt("if (a) b() else c();","if (a) b()\nelse c();");bt("if (a) b() else if c() d();","if (a) b()\nelse if c() d();");bt("{}");bt("{\n\n}");bt("do { a(); } while ( 1 );","do {\n\ta();\n} while (1);");bt("do {} while (1);");bt("do {\n} while (1);","do {} while (1);");bt("do {\n\n} while (1);");bt("var a = x(a, b, c)");bt("delete x if (a) b();","delete x\nif (a) b();");bt("delete x[x] if (a) b();","delete x[x]\nif (a) b();");
bt("for(var a=1,b=2)","for (var a = 1, b = 2)");bt("for(var a=1,b=2,c=3)","for (var a = 1, b = 2, c = 3)");bt("for(var a=1,b=2,c=3;d<3;d++)","for (var a = 1, b = 2, c = 3; d < 3; d++)");bt("function x(){(a||b).c()}","function x() {\n\t(a || b).c()\n}");bt("function x(){return - 1}","function x() {\n\treturn -1\n}");bt("function x(){return ! a}","function x() {\n\treturn !a\n}");bt("settings = $.extend({},defaults,settings);","settings = $.extend({}, defaults, settings);");bt("{xxx;}()","{\n\txxx;\n}()");
bt("a = 'a'\nb = 'b'");bt("a = /reg/exp");bt("a = /reg/");bt("/abc/.test()");bt("/abc/i.test()");bt("{/abc/i.test()}","{\n\t/abc/i.test()\n}");bt("var x=(a)/a;","var x = (a) / a;");bt("x != -1","x != -1");bt("for (; s--\>0;)","for (; s-- > 0;)");bt("for (; s++>0;)","for (; s++ > 0;)");bt("a = s++>s--;","a = s++ > s--;");bt("a = s++>--s;","a = s++ > --s;");bt("{x=#1=[]}","{\n\tx = #1=[]\n}");bt("{a:#1={}}","{\n\ta: #1={}\n}");bt("{a:#1#}","{\n\ta: #1#\n}");test_fragment("{a:1},{a:2}","{\n\ta: 1\n}, {\n\ta: 2\n}");
test_fragment("var ary=[{a:1}, {a:2}];","var ary = [{\n\ta: 1\n}, {\n\ta: 2\n}];");test_fragment("{a:#1","{\n\ta: #1");test_fragment("{a:#","{\n\ta: #");test_fragment("}}}","}\n}\n}");test_fragment("<!--\nvoid();\n// --\>","<!--\nvoid();\n// --\>");test_fragment("a=/regexp","a = /regexp");bt("{a:#1=[],b:#1#,c:#999999#}","{\n\ta: #1=[],\n\tb: #1#,\n\tc: #999999#\n}");bt("a = 1e+2");bt("a = 1e-2");bt("do{x()}while(a>1)","do {\n\tx()\n} while (a > 1)");bt("x(); /reg/exp.match(something)","x();\n/reg/exp.match(something)");
test_fragment("something();(","something();\n(");test_fragment("#!she/bangs, she bangs\nf=1","#!she/bangs, she bangs\n\nf = 1");test_fragment("#!she/bangs, she bangs\n\nf=1","#!she/bangs, she bangs\n\nf = 1");test_fragment("#!she/bangs, she bangs\n\n/* comment */","#!she/bangs, she bangs\n\n/* comment */");test_fragment("#!she/bangs, she bangs\n\n\n/* comment */","#!she/bangs, she bangs\n\n\n/* comment */");test_fragment("#","#");test_fragment("#!","#!");bt("function namespace::something()");test_fragment("<!--\nsomething();\n--\>",
"<!--\nsomething();\n--\>");test_fragment("<!--\nif(i<0){bla();}\n--\>","<!--\nif (i < 0) {\n\tbla();\n}\n--\>");test_fragment("<!--\nsomething();\n--\>\n<!--\nsomething();\n--\>","<!--\nsomething();\n--\>\n<!--\nsomething();\n--\>");test_fragment("<!--\nif(i<0){bla();}\n--\>\n<!--\nif(i<0){bla();}\n--\>","<!--\nif (i < 0) {\n\tbla();\n}\n--\>\n<!--\nif (i < 0) {\n\tbla();\n}\n--\>");bt("{foo();--bar;}","{\n\tfoo();\n\t--bar;\n}");bt("{foo();++bar;}","{\n\tfoo();\n\t++bar;\n}");bt("{--bar;}","{\n\t--bar;\n}");
bt("{++bar;}","{\n\t++bar;\n}");bt("a(/abc\\/\\/def/);b()","a(/abc\\/\\/def/);\nb()");bt("a(/a[b\\[\\]c]d/);b()","a(/a[b\\[\\]c]d/);\nb()");test_fragment("a(/a[b\\[","a(/a[b\\[");bt("a(/[a/b]/);b()","a(/[a/b]/);\nb()");bt("a=[[1,2],[4,5],[7,8]]","a = [\n\t[1, 2],\n\t[4, 5],\n\t[7, 8]\n]");bt("a=[a[1],b[4],c[d[7]]]","a = [a[1], b[4], c[d[7]]]");bt("[1,2,[3,4,[5,6],7],8]","[1, 2, [3, 4, [5, 6], 7], 8]");bt('[[["1","2"],["3","4"]],[["5","6","7"],["8","9","0"]],[["1","2","3"],["4","5","6","7"],["8","9","0"]]]',
'[\n\t[\n\t\t["1", "2"],\n\t\t["3", "4"]\n\t],\n\t[\n\t\t["5", "6", "7"],\n\t\t["8", "9", "0"]\n\t],\n\t[\n\t\t["1", "2", "3"],\n\t\t["4", "5", "6", "7"],\n\t\t["8", "9", "0"]\n\t]\n]');bt("{[x()[0]];indent;}","{\n\t[x()[0]];\n\tindent;\n}");bt("return ++i","return ++i");bt("return !!x","return !!x");bt("return !x","return !x");bt("return [1,2]","return [1, 2]");bt("return;","return;");bt("return\nfunc","return\nfunc");bt("catch(e)","catch (e)");bt("var a=1,b={foo:2,bar:3},c=4;","var a = 1,\n\tb = {\n\t\tfoo: 2,\n\t\tbar: 3\n\t},\n\tc = 4;");
bt("function x(/*int*/ start, /*string*/ foo)","function x( /*int*/ start, /*string*/ foo)");bt("/**\n* foo\n*/","/**\n * foo\n */");bt("\t/**\n\t * foo\n\t */","/**\n * foo\n */");bt("{\n/**\n* foo\n*/\n}","{\n\t/**\n\t * foo\n\t */\n}");bt("var a,b,c=1,d,e,f=2;","var a, b, c = 1,\n\td, e, f = 2;");bt("var a,b,c=[],d,e,f=2;","var a, b, c = [],\n\td, e, f = 2;");bt("do/regexp/;\nwhile(1);","do /regexp/;\nwhile (1);");bt("var a = a,\na;\nb = {\nb\n}","var a = a,\n\ta;\nb = {\n\tb\n}");bt("var a = a,\n\t/* c */\n\tb;");
bt("var a = a,\n\t// c\n\tb;");bt('foo.("bar");');bt("if (a) a()\nelse b()\nnewline()");bt("if (a) a()\nnewline()");bt("a=typeof(x)","a = typeof(x)");bt("var a = function() {\n\t\treturn null;\n\t},\n\tb = false;");bt("var a = function() {\n\t\tfunc1()\n\t}");bt("var a = function() {\n\t\tfunc1()\n\t}\nvar b = function() {\n\t\tfunc2()\n\t}");opts.jslint_happy=true;bt("a=typeof(x)","a = typeof (x)");bt("x();\n\nfunction(){}","x();\n\nfunction () {}");bt("function () {\n\tvar a, b, c, d, e = [],\n\t\tf;\n}");
test_fragment("// comment 1\n(function()","// comment 1\n(function ()");bt("var a1, b1, c1, d1 = 0, c = function() {}, d = '';","var a1, b1, c1, d1 = 0,\n\tc = function () {},\n\td = '';");bt("var o1=$.extend(a);function(){alert(x);}","var o1 = $.extend(a);\n\nfunction () {\n\talert(x);\n}");opts.jslint_happy=false;test_fragment("// comment 2\n(function()","// comment 2\n(function()");bt("var a2, b2, c2, d2 = 0, c = function() {}, d = '';","var a2, b2, c2, d2 = 0,\n\tc = function() {},\n\td = '';");
bt("var o2=$.extend(a);function(){alert(x);}","var o2 = $.extend(a);\n\nfunction() {\n\talert(x);\n}");bt('{"x":[{"a":1,"b":3},7,8,8,8,8,{"b":99},{"a":11}]}','{\n\t"x": [{\n\t\t"a": 1,\n\t\t"b": 3\n\t},\n\t7, 8, 8, 8, 8,\n\t{\n\t\t"b": 99\n\t}, {\n\t\t"a": 11\n\t}]\n}');bt('{"1":{"1a":"1b"},"2"}','{\n\t"1": {\n\t\t"1a": "1b"\n\t},\n\t"2"\n}');bt("{a:{a:b},c}","{\n\ta: {\n\t\ta: b\n\t},\n\tc\n}");bt("{[y[a]];keep_indent;}","{\n\t[y[a]];\n\tkeep_indent;\n}");bt("if (x) {y} else { if (x) {y}}","if (x) {\n\ty\n} else {\n\tif (x) {\n\t\ty\n\t}\n}");
bt("if (foo) one()\ntwo()\nthree()");bt("if (1 + foo() && bar(baz()) / 2) one()\ntwo()\nthree()");bt("if (1 + foo() && bar(baz()) / 2) one();\ntwo();\nthree();");opts.indent_size=1;opts.indent_char=" ";bt("{ one_char() }","{\n one_char()\n}");bt("var a,b=1,c=2","var a, b = 1,\n\tc = 2");opts.indent_size=4;opts.indent_char=" ";bt("{ one_char() }","{\n\tone_char()\n}");opts.indent_size=1;opts.indent_char="\t";bt("{ one_char() }","{\n\tone_char()\n}");bt("x = a ? b : c; x;","x = a ? b : c;\nx;");opts.indent_size=
4;opts.indent_char=" ";opts.preserve_newlines=false;bt("var\na=dont_preserve_newlines;","var a = dont_preserve_newlines;");bt("function foo() {\n\treturn 1;\n}\n\nfunction foo() {\n\treturn 1;\n}");bt("function foo() {\n\treturn 1;\n}\nfunction foo() {\n\treturn 1;\n}","function foo() {\n\treturn 1;\n}\n\nfunction foo() {\n\treturn 1;\n}");bt("function foo() {\n\treturn 1;\n}\n\n\nfunction foo() {\n\treturn 1;\n}","function foo() {\n\treturn 1;\n}\n\nfunction foo() {\n\treturn 1;\n}");opts.preserve_newlines=
true;bt("var\na=do_preserve_newlines;","var\na = do_preserve_newlines;");opts.keep_array_indentation=true;bt("var x = [{}\n]","var x = [{}\n]");bt("var x = [{foo:bar}\n]","var x = [{\n\tfoo: bar\n}\n]");bt("a = ['something',\n'completely',\n'different'];\nif (x);","a = ['something',\n\t'completely',\n\t'different'];\nif (x);");bt("a = ['a','b','c']","a = ['a', 'b', 'c']");bt("a = ['a',   'b','c']","a = ['a', 'b', 'c']");bt("x = [{'a':0}]","x = [{\n\t'a': 0\n}]");bt("{a([[a1]], {b;});}","{\n\ta([[a1]], {\n\t\tb;\n\t});\n}");
bt("a = //comment\n/regex/;");test_fragment("/*\n * X\n */");test_fragment("/*\r\n * X\r\n */","/*\n * X\n */");bt("if (a)\n{\nb;\n}\nelse\n{\nc;\n}","if (a) {\n\tb;\n} else {\n\tc;\n}");opts.brace_style="expand";bt("var a=1,b={foo:2,bar:3},c=4;","var a = 1,\n\tb = {\n\t\tfoo: 2,\n\t\tbar: 3\n\t},\n\tc = 4;");bt("if (a)\n{\nb;\n}\nelse\n{\nc;\n}","if (a)\n{\n\tb;\n}\nelse\n{\n\tc;\n}");test_fragment("if (foo) {","if (foo)\n{");test_fragment("foo {","foo\n{");test_fragment("return {","return {");test_fragment("return;\n{",
"return;\n{");bt("if (a)\n{\nb;\n}\nelse\n{\nc;\n}","if (a)\n{\n\tb;\n}\nelse\n{\n\tc;\n}");bt("var foo = {}");bt("if (a)\n{\nb;\n}\nelse\n{\nc;\n}","if (a)\n{\n\tb;\n}\nelse\n{\n\tc;\n}");test_fragment("if (foo) {","if (foo)\n{");test_fragment("foo {","foo\n{");test_fragment("return {","return {");test_fragment("return;\n{","return;\n{");opts.brace_style="collapse";bt("if (a)\n{\nb;\n}\nelse\n{\nc;\n}","if (a) {\n\tb;\n} else {\n\tc;\n}");test_fragment("if (foo) {","if (foo) {");test_fragment("foo {",
"foo {");test_fragment("return {","return {");test_fragment("return;\n{","return; {");bt("if (foo) bar();\nelse break");bt("function x() {\n\tfoo();\n}zzz","function x() {\n\tfoo();\n}\nzzz");bt("a: do {} while (); xxx","a: do {} while ();\nxxx");bt("var a = new function();");test_fragment("new function");bt("var a =\nfoo","var a = foo");opts.brace_style="end-expand";bt("if(1){2}else{3}","if (1) {\n\t2\n}\nelse {\n\t3\n}");bt("try{a();}catch(b){c();}finally{d();}","try {\n\ta();\n}\ncatch (b) {\n\tc();\n}\nfinally {\n\td();\n}");
bt("if(a){b();}else if(c) foo();","if (a) {\n\tb();\n}\nelse if (c) foo();");bt("if (a) {\n// comment\n}else{\n// comment\n}","if (a) {\n\t// comment\n}\nelse {\n\t// comment\n}");bt("if (x) {y} else { if (x) {y}}","if (x) {\n\ty\n}\nelse {\n\tif (x) {\n\t\ty\n\t}\n}");bt("if (a)\n{\nb;\n}\nelse\n{\nc;\n}","if (a) {\n\tb;\n}\nelse {\n\tc;\n}");return sanitytest}
var JavascriptObfuscator={detect:function(a){return/^var _0x[a-f0-9]+ ?\= ?\[/.test(a)},unpack:function(a){if(JavascriptObfuscator.detect(a)){var e=/var (_0x[a-f\d]+) ?\= ?\[(.*?)\];/.exec(a);if(e){var p=e[1],f=JavascriptObfuscator._smart_split(e[2]);a=a.substring(e[0].length);for(var n in f)a=a.replace(RegExp(p+"\\["+n+"\\]","g"),JavascriptObfuscator._fix_quotes(JavascriptObfuscator._unescape(f[n])))}}return a},_fix_quotes:function(a){var e=/^"(.*)"$/.exec(a);if(e){a=e[1];a="'"+a.replace(/'/g,"\\'")+
"'"}return a},_smart_split:function(a){for(var e=[],p=0;p<a.length;){if(a.charAt(p)=='"'){var f="";for(p+=1;p<a.length;){if(a.charAt(p)=='"')break;if(a.charAt(p)=="\\"){f+="\\";p++}f+=a.charAt(p);p++}e.push('"'+f+'"')}p+=1}return e},_unescape:function(a){for(var e=32;e<128;e++)a=a.replace(RegExp("\\\\x"+e.toString(16),"ig"),String.fromCharCode(e));return a},run_tests:function(a){a=a||new SanityTest;a.test_function(JavascriptObfuscator._smart_split,"JavascriptObfuscator._smart_split");a.expect("",
[]);a.expect('"a", "b"',['"a"','"b"']);a.expect('"aaa","bbbb"',['"aaa"','"bbbb"']);a.expect('"a", "b\\""',['"a"','"b\\""']);a.test_function(JavascriptObfuscator._unescape,"JavascriptObfuscator._unescape");a.expect("\\x40","@");a.expect("\\x10","\\x10");a.expect("\\x1","\\x1");a.expect("\\x61\\x62\\x22\\x63\\x64",'ab"cd');a.test_function(JavascriptObfuscator.detect,"JavascriptObfuscator.detect");a.expect("",false);a.expect("abcd",false);a.expect("var _0xaaaa",false);a.expect('var _0xaaaa = ["a", "b"]',
true);a.expect('var _0xaaaa=["a", "b"]',true);a.expect('var _0x1234=["a","b"]',true);return a}},MyObfuscate={detect:function(a){return/^var _?[0O1lI]{3}\=('|\[).*\)\)\);/.test(a)},unpack:function(a){if(MyObfuscate.detect(a)){var e=a.replace(";eval(",";unpacked_source = ("),p="";eval(e);if(p)if(MyObfuscate.starts_with(p,"var _escape")){e=/'([^']*)'/.exec(p);e=unescape(e[1]);if(MyObfuscate.starts_with(e,"<script>"))e=e.substr(8,e.length-8);if(MyObfuscate.ends_with(e,"<\/script>"))e=e.substr(0,e.length-
9);p=e}return p?"// Unpacker warning: be careful when using myobfuscate.com for your projects:\n// scripts obfuscated by the free online version call back home.\n\n//\n"+p:a}return a},starts_with:function(a,e){return a.substr(0,e.length)===e},ends_with:function(a,e){return a.substr(a.length-e.length,e.length)===e},run_tests:function(a){return a||new SanityTest}},P_A_C_K_E_R={detect:function(a){return P_A_C_K_E_R._starts_with(a.toLowerCase().replace(/ +/g,""),"eval(function(")||P_A_C_K_E_R._starts_with(a.toLowerCase().replace(/ +/g,
""),"eval((function(")},unpack:function(a){if(P_A_C_K_E_R.detect(a))try{eval("unpacked_source = "+a.substring(4)+";")}catch(e){}return a},_starts_with:function(a,e){return a.substr(0,e.length)===e},run_tests:function(a){a=a||new SanityTest;a.test_function(P_A_C_K_E_R.detect,"P_A_C_K_E_R.detect");a.expect("",false);a.expect("var a = b",false);a.expect("eval(function(p,a,c,k,e,r",true);a.expect("eval ( function(p, a, c, k, e, r",true);a.test_function(P_A_C_K_E_R.unpack,"P_A_C_K_E_R.unpack");a.expect("eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\\\b'+e(c)+'\\\\b','g'),k[c]);return p}('0 2=1',3,3,'var||a'.split('|'),0,{}))",
"var a=1");a.test_function(function(e){return P_A_C_K_E_R._starts_with(e,"a")},"P_A_C_K_E_R._starts_with(?, a)");a.expect("abc",true);a.expect("bcd",false);a.expect("a",true);a.expect("",false);return a}},Urlencoded={detect:function(a){if(a.indexOf(" ")==-1){if(a.indexOf("%20")!=-1)return true;if(a.replace(/[^%]+/g,"").length>3)return true}return false},unpack:function(a){if(Urlencoded.detect(a))return unescape(a.replace(/\+/g,"%20"));return a},run_tests:function(a){a=a||new SanityTest;a.test_function(Urlencoded.detect,
"Urlencoded.detect");a.expect("",false);a.expect("var a = b",false);a.expect("var%20a+=+b",true);a.expect("var%20a=b",true);a.expect("var%20%21%22",true);a.test_function(Urlencoded.unpack,"Urlencoded.unpack");a.expect("","");a.expect("abcd","abcd");a.expect("var a = b","var a = b");a.expect("var%20a=b","var a=b");a.expect("var%20a+=+b","var a = b");return a}};

	/**
	 * JSBeautifier Notepad++ Wrapper
	 */

	var JSBeautifierWrapper = {

		config: {
		
			DEFAULT_VALUES: {
				tabSize: 4,
				braceStyle: 'collapse',
				detectPackers: true,
				preserveNewLines: false,
				keepArrayIndentation: true
			},
			
			config: null,
			
			getConfig: function(){
				return this.DEFAULT_VALUES;
			},
			setConfig: function(config){
				//GlobalSettings.set("JSBeautifuller", config);
			}
			
		},

		actions: {
			
			beautifyInProgress: false,
			
			beautifySelection: function(){
			
				var content = JSBeautifierWrapper.editor.getContent();
				
				var config = JSBeautifierWrapper.config.getConfig();
				var beautifiedContent = this.beautify(content, config);
				
				var positions = JSBeautifierWrapper.editor.getSelectionPositions();
				
				JSBeautifierWrapper.editor.setContent(
					beautifiedContent, 
					positions.start, 
					positions.end
				);
				
			},
			openSettingsDialog: function(){
				alert('TODO:openSettingsDialog');
				
				
			},
			
			beautify: function(source, options){
				if (this.beautifyInProgress) return;
				this.beautifyInProgress = true;
				
				var result = '';
				
				for(var i = 0; i < 1;i++){
					if (/\t|\s/g.test(source.charAt(0))){
						source = source.substr(1);
						i--;
					}
				};
				
				var indentChar = options.tabSize == 1 ? '\t' : ' ';
			 
				if(options.detectPackers){
					source = this.unpackerFilter(source);
				};
				
				var commentMark = '<-' + '-';
				if (source && source.charAt(0) === '<' && source.substring(0, 4) !== commentMark) {
					result = style_html(
						source, 
						options.tabSize, 
						indentChar, 
						80, 
						options.braceStyle
					);
				} else {
					result = js_beautify(
						this.unpackerFilter(source),
						{
							indent_size:				options.tabSize,
							indent_char:				indentChar,
							preserve_newlines:			options.preserveNewLines,
							brace_style:				options.braceStyle,
							keep_array_indentation:		options.keepArrayIndentation,
							space_after_anon_function:	true
						}
					);
				}
			 
				this.beautifyInProgress = false;
				
				return result;
			},
			unpackerFilter: function(source){
				var trailing_comments = '';
				var comment = '';
				var found = false;		
				do{
					found = false;
					if (/^\s*\/\*/.test(source)){
						found = true;
						comment = source.substr(0, source.indexOf('*/') + 2);
						source = source.substr(comment.length).replace(/^\s+/, '');
						trailing_comments += comment + "\n";
					}else if(/^\s*\/\//.test(source)){
						found = true;
						comment = source.match(/^\s*\/\/.*/)[0];
						source = source.substr(comment.length).replace(/^\s+/, '');
						trailing_comments += comment + "\n";
					}
				}while(found);
				if (P_A_C_K_E_R.detect(source)) {
					source = unpacker_filter(P_A_C_K_E_R.unpack(source))
				};
				if (Urlencoded.detect(source)) {
					source = unpacker_filter(Urlencoded.unpack(source))
				};
				if (JavascriptObfuscator.detect(source)) {
					source = unpacker_filter(JavascriptObfuscator.unpack(source))
				};
				if (MyObfuscate.detect(source)) {
					source = unpacker_filter(MyObfuscate.unpack(source))
				};
				return trailing_comments + source;
			}
			
		},

		menu: {
		
			MENU_CONFIG: {
				MAIN_TEXT: 'JSBeautifier',
				ITEMS: [
					['Beautify JS/HTML', 'beautifySelection', 'Ctrl+Shift+J'],
					['Options', 'openSettingsDialog', 'Ctrl+Shift+R']
				]
			},
			
			mainMenu: null,
			
			addMenuItems: function(){
				// create main menu item
				this.mainMenu = Editor.addMenu(this.MENU_CONFIG.MAIN_TEXT);
				// create subitems
				for(var i = 0, il = this.MENU_CONFIG.ITEMS.length; i < il; i++){
					this.addMenuItem(this.MENU_CONFIG.ITEMS[i]);
				}
			},
			
			addMenuItem: function(menuItem){
				var
					name = menuItem[0], 
					action = menuItem[1], 
					keystroke = menuItem[2]
				;
				var menuObj = {
					text: name + (keystroke ? '\t' + keystroke : ''),
					cmd: function() {
						JSBeautifierWrapper.actions[action]();
					},
					ctrl: false,
					alt: false,
					shift: false
				};
				if (keystroke) {
					var keys = keystroke.split('+');
					for (var i = 0, il = keys.length; i < il; i++) {
						var key = keys[i].toLowerCase();
						menuObj[key] = true;
						if (key !== "ctrl" && key !== "alt" && key !== "shift") {
							menuObj.key = key;
						}
					};
					//Editor.addSystemHotKey(menuObj);
					addHotKey(menuObj);
				};
				this.mainMenu.addItem(menuObj);
			}
			
		},
		
		editor: {
		
			context: null,
			
			lastText: null,
			charByteMap: null,
			
			updateContext: function(){
				this.context = Editor.currentView;
			},
			
			getContent: function(){
				this.updateContext();
				return this.context.selection;
			},
			setContent: function(value, start, end){
				this.updateContext();
				this.createSelection(start, end);
				this.context.selection = value;
			},
			
			createSelection: function(start, end){
				this.context.anchor = this.charToBytes(start);
				this.context.pos = this.charToBytes(end);
			},
			
			getSelectionPositions: function(){
				return {
					start: this.byteToChars(
						Math.min(this.context.anchor, this.context.pos)
					),
					end: this.byteToChars(
						Math.max(this.context.anchor, this.context.pos)
					)
				};
			},
			
			byteToChars: function(bytePos){
				if(this.context.codepage == 65001){
					// UTF-8
					this.updateCharMap();
					return this.charByteMap.bytes[bytePos];
				}else{
					// ANSII
					this.lastText = null;
					return bytePos;
				}
			},
			charToBytes: function(charPos){
				if(this.context.codepage == 65001){
					// UTF-8
					this.updateCharMap();
					return this.charByteMap.chars[charPos];
				}else{
					// ANSII
					this.lastText = null;
					return charPos;
				}
			},
			
			updateCharMap: function(){
				if (this.lastText !== this.context.text) {
					this.lastText = this.context.text;
					this.charByteMap = this.createCharByteMap(this.lastText);
				}
			},
			createCharByteMap: function(text){
				var 
					lastChar = 0, 
					lastByte = 0,
					result = {
						bytes: [], // bytes to chars
						chars: []  // chars to bytes
					},
					charCode,
					charLen
				;
				for (var i = 0, il = text.length; i < il; i++) {
					charCode = text.charCodeAt(i);
					if (charCode < 128) {
						charLen = 1;
					} else if (charCode > 127 && charCode < 2048) {
						charLen = 2;
					} else if (charCode > 2047 && charCode < 65536) {
						charLen = 3;
					} else {
						charLen = 4;
					};
					result.bytes[lastByte] = lastChar;
					result.chars[lastChar] = lastByte;
					lastChar++;
					lastByte += charLen;
				}
				result.bytes[lastByte] = lastChar;
				result.chars[lastChar] = lastByte;
				return result;
			},
			
			setCaretPos: function(pos){
				this.context.anchor = this.context.pos = this.charToBytes(pos);
			}
			
		}

	};

	JSBeautifierWrapper.menu.addMenuItems();

})();
