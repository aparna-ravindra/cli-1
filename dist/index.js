(()=>{"use strict";var e={604:function(e,t,r){var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(Object.hasOwnProperty.call(e,r))t[r]=e[r];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const n=i(r(37));const o=r(245);function issueCommand(e,t,r){const i=new Command(e,t,r);process.stdout.write(i.toString()+n.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const s="::";class Command{constructor(e,t,r){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=r}toString(){let e=s+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const r in this.properties){if(this.properties.hasOwnProperty(r)){const i=this.properties[r];if(i){if(t){t=false}else{e+=","}e+=`${r}=${escapeProperty(i)}`}}}}e+=`${s}${escapeData(this.message)}`;return e}}function escapeData(e){return o.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return o.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},127:function(e,t,r){var i=this&&this.__awaiter||function(e,t,r,i){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function fulfilled(e){try{step(i.next(e))}catch(e){n(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){n(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())}))};var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(Object.hasOwnProperty.call(e,r))t[r]=e[r];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=r(604);const s=r(352);const c=r(245);const a=n(r(37));const l=n(r(17));var u;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(u=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const r=c.toCommandValue(t);process.env[e]=r;const i=process.env["GITHUB_ENV"]||"";if(i){const t="_GitHubActionsFileCommandDelimeter_";const i=`${e}<<${t}${a.EOL}${r}${a.EOL}${t}`;s.issueCommand("ENV",i)}else{o.issueCommand("set-env",{name:e},r)}}t.exportVariable=exportVariable;function setSecret(e){o.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){s.issueCommand("PATH",e)}else{o.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${l.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const r=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!r){throw new Error(`Input required and not supplied: ${e}`)}return r.trim()}t.getInput=getInput;function setOutput(e,t){o.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){o.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=u.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){o.issueCommand("debug",{},e)}t.debug=debug;function error(e){o.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){o.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+a.EOL)}t.info=info;function startGroup(e){o.issue("group",e)}t.startGroup=startGroup;function endGroup(){o.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return i(this,void 0,void 0,(function*(){startGroup(e);let r;try{r=yield t()}finally{endGroup()}return r}))}t.group=group;function saveState(e,t){o.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},352:function(e,t,r){var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(Object.hasOwnProperty.call(e,r))t[r]=e[r];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const n=i(r(147));const o=i(r(37));const s=r(245);function issueCommand(e,t){const r=process.env[`GITHUB_${e}`];if(!r){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!n.existsSync(r)){throw new Error(`Missing file at path: ${r}`)}n.appendFileSync(r,`${s.toCommandValue(t)}${o.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},245:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue},49:function(e,t,r){var i=this&&this.__awaiter||function(e,t,r,i){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function fulfilled(e){try{step(i.next(e))}catch(e){n(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){n(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});const n=r(469);function exec(e,t,r){return i(this,void 0,void 0,(function*(){const i=n.argStringToArray(e);if(i.length===0){throw new Error(`Parameter 'commandLine' cannot be null or empty.`)}const o=i[0];t=i.slice(1).concat(t||[]);const s=new n.ToolRunner(o,t,r);return s.exec()}))}t.exec=exec},469:function(e,t,r){var i=this&&this.__awaiter||function(e,t,r,i){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function fulfilled(e){try{step(i.next(e))}catch(e){n(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){n(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});const n=r(37);const o=r(361);const s=r(81);const c=process.platform==="win32";class ToolRunner extends o.EventEmitter{constructor(e,t,r){super();if(!e){throw new Error("Parameter 'toolPath' cannot be null or empty.")}this.toolPath=e;this.args=t||[];this.options=r||{}}_debug(e){if(this.options.listeners&&this.options.listeners.debug){this.options.listeners.debug(e)}}_getCommandString(e,t){const r=this._getSpawnFileName();const i=this._getSpawnArgs(e);let n=t?"":"[command]";if(c){if(this._isCmdFile()){n+=r;for(const e of i){n+=` ${e}`}}else if(e.windowsVerbatimArguments){n+=`"${r}"`;for(const e of i){n+=` ${e}`}}else{n+=this._windowsQuoteCmdArg(r);for(const e of i){n+=` ${this._windowsQuoteCmdArg(e)}`}}}else{n+=r;for(const e of i){n+=` ${e}`}}return n}_processLineBuffer(e,t,r){try{let i=t+e.toString();let o=i.indexOf(n.EOL);while(o>-1){const e=i.substring(0,o);r(e);i=i.substring(o+n.EOL.length);o=i.indexOf(n.EOL)}t=i}catch(e){this._debug(`error processing line. Failed with error ${e}`)}}_getSpawnFileName(){if(c){if(this._isCmdFile()){return process.env["COMSPEC"]||"cmd.exe"}}return this.toolPath}_getSpawnArgs(e){if(c){if(this._isCmdFile()){let t=`/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;for(const r of this.args){t+=" ";t+=e.windowsVerbatimArguments?r:this._windowsQuoteCmdArg(r)}t+='"';return[t]}}return this.args}_endsWith(e,t){return e.endsWith(t)}_isCmdFile(){const e=this.toolPath.toUpperCase();return this._endsWith(e,".CMD")||this._endsWith(e,".BAT")}_windowsQuoteCmdArg(e){if(!this._isCmdFile()){return this._uvQuoteCmdArg(e)}if(!e){return'""'}const t=[" ","\t","&","(",")","[","]","{","}","^","=",";","!","'","+",",","`","~","|","<",">",'"'];let r=false;for(const i of e){if(t.some((e=>e===i))){r=true;break}}if(!r){return e}let i='"';let n=true;for(let t=e.length;t>0;t--){i+=e[t-1];if(n&&e[t-1]==="\\"){i+="\\"}else if(e[t-1]==='"'){n=true;i+='"'}else{n=false}}i+='"';return i.split("").reverse().join("")}_uvQuoteCmdArg(e){if(!e){return'""'}if(!e.includes(" ")&&!e.includes("\t")&&!e.includes('"')){return e}if(!e.includes('"')&&!e.includes("\\")){return`"${e}"`}let t='"';let r=true;for(let i=e.length;i>0;i--){t+=e[i-1];if(r&&e[i-1]==="\\"){t+="\\"}else if(e[i-1]==='"'){r=true;t+="\\"}else{r=false}}t+='"';return t.split("").reverse().join("")}_cloneExecOptions(e){e=e||{};const t={cwd:e.cwd||process.cwd(),env:e.env||process.env,silent:e.silent||false,windowsVerbatimArguments:e.windowsVerbatimArguments||false,failOnStdErr:e.failOnStdErr||false,ignoreReturnCode:e.ignoreReturnCode||false,delay:e.delay||1e4};t.outStream=e.outStream||process.stdout;t.errStream=e.errStream||process.stderr;return t}_getSpawnOptions(e,t){e=e||{};const r={};r.cwd=e.cwd;r.env=e.env;r["windowsVerbatimArguments"]=e.windowsVerbatimArguments||this._isCmdFile();if(e.windowsVerbatimArguments){r.argv0=`"${t}"`}return r}exec(){return i(this,void 0,void 0,(function*(){return new Promise(((e,t)=>{this._debug(`exec tool: ${this.toolPath}`);this._debug("arguments:");for(const e of this.args){this._debug(`   ${e}`)}const r=this._cloneExecOptions(this.options);if(!r.silent&&r.outStream){r.outStream.write(this._getCommandString(r)+n.EOL)}const i=new ExecState(r,this.toolPath);i.on("debug",(e=>{this._debug(e)}));const o=this._getSpawnFileName();const c=s.spawn(o,this._getSpawnArgs(r),this._getSpawnOptions(this.options,o));const a="";if(c.stdout){c.stdout.on("data",(e=>{if(this.options.listeners&&this.options.listeners.stdout){this.options.listeners.stdout(e)}if(!r.silent&&r.outStream){r.outStream.write(e)}this._processLineBuffer(e,a,(e=>{if(this.options.listeners&&this.options.listeners.stdline){this.options.listeners.stdline(e)}}))}))}const l="";if(c.stderr){c.stderr.on("data",(e=>{i.processStderr=true;if(this.options.listeners&&this.options.listeners.stderr){this.options.listeners.stderr(e)}if(!r.silent&&r.errStream&&r.outStream){const t=r.failOnStdErr?r.errStream:r.outStream;t.write(e)}this._processLineBuffer(e,l,(e=>{if(this.options.listeners&&this.options.listeners.errline){this.options.listeners.errline(e)}}))}))}c.on("error",(e=>{i.processError=e.message;i.processExited=true;i.processClosed=true;i.CheckComplete()}));c.on("exit",(e=>{i.processExitCode=e;i.processExited=true;this._debug(`Exit code ${e} received from tool '${this.toolPath}'`);i.CheckComplete()}));c.on("close",(e=>{i.processExitCode=e;i.processExited=true;i.processClosed=true;this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);i.CheckComplete()}));i.on("done",((r,i)=>{if(a.length>0){this.emit("stdline",a)}if(l.length>0){this.emit("errline",l)}c.removeAllListeners();if(r){t(r)}else{e(i)}}))}))}))}}t.ToolRunner=ToolRunner;function argStringToArray(e){const t=[];let r=false;let i=false;let n="";function append(e){if(i&&e!=='"'){n+="\\"}n+=e;i=false}for(let o=0;o<e.length;o++){const s=e.charAt(o);if(s==='"'){if(!i){r=!r}else{append(s)}continue}if(s==="\\"&&i){append(s);continue}if(s==="\\"&&r){i=true;continue}if(s===" "&&!r){if(n.length>0){t.push(n);n=""}continue}append(s)}if(n.length>0){t.push(n.trim())}return t}t.argStringToArray=argStringToArray;class ExecState extends o.EventEmitter{constructor(e,t){super();this.processClosed=false;this.processError="";this.processExitCode=0;this.processExited=false;this.processStderr=false;this.delay=1e4;this.done=false;this.timeout=null;if(!t){throw new Error("toolPath must not be empty")}this.options=e;this.toolPath=t;if(e.delay){this.delay=e.delay}}CheckComplete(){if(this.done){return}if(this.processClosed){this._setResult()}else if(this.processExited){this.timeout=setTimeout(ExecState.HandleTimeout,this.delay,this)}}_debug(e){this.emit("debug",e)}_setResult(){let e;if(this.processExited){if(this.processError){e=new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`)}else if(this.processExitCode!==0&&!this.options.ignoreReturnCode){e=new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`)}else if(this.processStderr&&this.options.failOnStdErr){e=new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`)}}if(this.timeout){clearTimeout(this.timeout);this.timeout=null}this.done=true;this.emit("done",e,this.processExitCode)}static HandleTimeout(e){if(e.done){return}if(!e.processClosed&&e.processExited){const t=`The STDIO streams did not close within ${e.delay/1e3} seconds of the exit event from process '${e.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;e._debug(t)}e._setResult()}}},887:function(e,t,r){var i=this&&this.__awaiter||function(e,t,r,i){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function fulfilled(e){try{step(i.next(e))}catch(e){n(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){n(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())}))};var n;Object.defineProperty(t,"__esModule",{value:true});const o=r(491);const s=r(147);const c=r(17);n=s.promises,t.chmod=n.chmod,t.copyFile=n.copyFile,t.lstat=n.lstat,t.mkdir=n.mkdir,t.readdir=n.readdir,t.readlink=n.readlink,t.rename=n.rename,t.rmdir=n.rmdir,t.stat=n.stat,t.symlink=n.symlink,t.unlink=n.unlink;t.IS_WINDOWS=process.platform==="win32";function exists(e){return i(this,void 0,void 0,(function*(){try{yield t.stat(e)}catch(e){if(e.code==="ENOENT"){return false}throw e}return true}))}t.exists=exists;function isDirectory(e,r=false){return i(this,void 0,void 0,(function*(){const i=r?yield t.stat(e):yield t.lstat(e);return i.isDirectory()}))}t.isDirectory=isDirectory;function isRooted(e){e=normalizeSeparators(e);if(!e){throw new Error('isRooted() parameter "p" cannot be empty')}if(t.IS_WINDOWS){return e.startsWith("\\")||/^[A-Z]:/i.test(e)}return e.startsWith("/")}t.isRooted=isRooted;function mkdirP(e,r=1e3,n=1){return i(this,void 0,void 0,(function*(){o.ok(e,"a path argument must be provided");e=c.resolve(e);if(n>=r)return t.mkdir(e);try{yield t.mkdir(e);return}catch(i){switch(i.code){case"ENOENT":{yield mkdirP(c.dirname(e),r,n+1);yield t.mkdir(e);return}default:{let r;try{r=yield t.stat(e)}catch(e){throw i}if(!r.isDirectory())throw i}}}}))}t.mkdirP=mkdirP;function tryGetExecutablePath(e,r){return i(this,void 0,void 0,(function*(){let i=undefined;try{i=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(i&&i.isFile()){if(t.IS_WINDOWS){const t=c.extname(e).toUpperCase();if(r.some((e=>e.toUpperCase()===t))){return e}}else{if(isUnixExecutable(i)){return e}}}const n=e;for(const o of r){e=n+o;i=undefined;try{i=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(i&&i.isFile()){if(t.IS_WINDOWS){try{const r=c.dirname(e);const i=c.basename(e).toUpperCase();for(const n of yield t.readdir(r)){if(i===n.toUpperCase()){e=c.join(r,n);break}}}catch(t){console.log(`Unexpected error attempting to determine the actual case of the file '${e}': ${t}`)}return e}else{if(isUnixExecutable(i)){return e}}}}return""}))}t.tryGetExecutablePath=tryGetExecutablePath;function normalizeSeparators(e){e=e||"";if(t.IS_WINDOWS){e=e.replace(/\//g,"\\");return e.replace(/\\\\+/g,"\\")}return e.replace(/\/\/+/g,"/")}function isUnixExecutable(e){return(e.mode&1)>0||(e.mode&8)>0&&e.gid===process.getgid()||(e.mode&64)>0&&e.uid===process.getuid()}},864:function(e,t,r){var i=this&&this.__awaiter||function(e,t,r,i){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function fulfilled(e){try{step(i.next(e))}catch(e){n(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){n(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});const n=r(81);const o=r(17);const s=r(837);const c=r(887);const a=s.promisify(n.exec);function cp(e,t,r={}){return i(this,void 0,void 0,(function*(){const{force:i,recursive:n}=readCopyOptions(r);const s=(yield c.exists(t))?yield c.stat(t):null;if(s&&s.isFile()&&!i){return}const a=s&&s.isDirectory()?o.join(t,o.basename(e)):t;if(!(yield c.exists(e))){throw new Error(`no such file or directory: ${e}`)}const l=yield c.stat(e);if(l.isDirectory()){if(!n){throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`)}else{yield cpDirRecursive(e,a,0,i)}}else{if(o.relative(e,a)===""){throw new Error(`'${a}' and '${e}' are the same file`)}yield copyFile(e,a,i)}}))}t.cp=cp;function mv(e,t,r={}){return i(this,void 0,void 0,(function*(){if(yield c.exists(t)){let i=true;if(yield c.isDirectory(t)){t=o.join(t,o.basename(e));i=yield c.exists(t)}if(i){if(r.force==null||r.force){yield rmRF(t)}else{throw new Error("Destination already exists")}}}yield mkdirP(o.dirname(t));yield c.rename(e,t)}))}t.mv=mv;function rmRF(e){return i(this,void 0,void 0,(function*(){if(c.IS_WINDOWS){try{if(yield c.isDirectory(e,true)){yield a(`rd /s /q "${e}"`)}else{yield a(`del /f /a "${e}"`)}}catch(e){if(e.code!=="ENOENT")throw e}try{yield c.unlink(e)}catch(e){if(e.code!=="ENOENT")throw e}}else{let t=false;try{t=yield c.isDirectory(e)}catch(e){if(e.code!=="ENOENT")throw e;return}if(t){yield a(`rm -rf "${e}"`)}else{yield c.unlink(e)}}}))}t.rmRF=rmRF;function mkdirP(e){return i(this,void 0,void 0,(function*(){yield c.mkdirP(e)}))}t.mkdirP=mkdirP;function which(e,t){return i(this,void 0,void 0,(function*(){if(!e){throw new Error("parameter 'tool' is required")}if(t){const t=yield which(e,false);if(!t){if(c.IS_WINDOWS){throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`)}else{throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`)}}}try{const t=[];if(c.IS_WINDOWS&&process.env.PATHEXT){for(const e of process.env.PATHEXT.split(o.delimiter)){if(e){t.push(e)}}}if(c.isRooted(e)){const r=yield c.tryGetExecutablePath(e,t);if(r){return r}return""}if(e.includes("/")||c.IS_WINDOWS&&e.includes("\\")){return""}const r=[];if(process.env.PATH){for(const e of process.env.PATH.split(o.delimiter)){if(e){r.push(e)}}}for(const i of r){const r=yield c.tryGetExecutablePath(i+o.sep+e,t);if(r){return r}}return""}catch(e){throw new Error(`which failed with message ${e.message}`)}}))}t.which=which;function readCopyOptions(e){const t=e.force==null?true:e.force;const r=Boolean(e.recursive);return{force:t,recursive:r}}function cpDirRecursive(e,t,r,n){return i(this,void 0,void 0,(function*(){if(r>=255)return;r++;yield mkdirP(t);const i=yield c.readdir(e);for(const o of i){const i=`${e}/${o}`;const s=`${t}/${o}`;const a=yield c.lstat(i);if(a.isDirectory()){yield cpDirRecursive(i,s,r,n)}else{yield copyFile(i,s,n)}}yield c.chmod(t,(yield c.stat(e)).mode)}))}function copyFile(e,t,r){return i(this,void 0,void 0,(function*(){if((yield c.lstat(e)).isSymbolicLink()){try{yield c.lstat(t);yield c.unlink(t)}catch(e){if(e.code==="EPERM"){yield c.chmod(t,"0666");yield c.unlink(t)}}const r=yield c.readlink(e);yield c.symlink(r,t,c.IS_WINDOWS?"junction":null)}else if(!(yield c.exists(t))||r){yield c.copyFile(e,t)}}))}},116:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){if(i===undefined)i=r;Object.defineProperty(e,i,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,i){if(i===undefined)i=r;e[i]=t[r]});var n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))i(t,e,r);n(t,e);return t};var s=this&&this.__awaiter||function(e,t,r,i){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function fulfilled(e){try{step(i.next(e))}catch(e){n(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){n(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.run=void 0;const c=o(r(127));const a=o(r(49));const l=o(r(864));const u=o(r(37));const d=o(r(17));const f=r(837);const p=f.promisify(r(81).exec);const h=r(149);const m=`Starting script execution via docker image mcr.microsoft.com/azure-cli:`;const v=`bash --noprofile --norc -e `;const _="/github/workspace";const y="/_temp";const g="agentazcliversion";t.run=()=>s(void 0,void 0,void 0,(function*(){var e="";const t=`MICROSOFT_AZURE_CLI_${h.getCurrentTime()}_CONTAINER`;try{if(process.env.RUNNER_OS!="Linux"){c.setFailed("Please use Linux based OS as a runner.");return}let r=c.getInput("inlineScript",{required:true});let i=c.getInput("azcliversion",{required:false}).trim().toLowerCase();if(i==g){try{const{stdout:e,stderr:t}=yield p("az version");if(!t){i=JSON.parse(e)["azure-cli"]}else{throw t}}catch(e){console.log("Failed to fetch az cli version from agent. Reverting back to latest.");i="latest"}}if(!(yield checkIfValidCLIVersion(i))){c.setFailed("Please enter a valid azure cli version. \nSee available versions: https://github.com/Azure/azure-cli/releases.");throw new Error("Please enter a valid azure cli version. \nSee available versions: https://github.com/Azure/azure-cli/releases.")}if(!r.trim()){c.setFailed("Please enter a valid script.");throw new Error("Please enter a valid script.")}r=` set -e >&2; echo '${m}' >&2; ${r}`;e=yield h.createScriptFile(r);let n=` ${v}${y}/${e} `;let o="";for(let e in process.env){if(!h.checkIfEnvironmentVariableIsOmitted(e)&&process.env[e]){o+=` -e "${e}=${process.env[e]}" `}}let s=d.relative(h.TEMP_DIRECTORY,process.env.GITHUB_ENV);const a=d.resolve(y,s);let l=`run --workdir ${_} -v ${process.env.GITHUB_WORKSPACE}:${_} `;l+=` -v ${process.env.HOME}/.azure:/root/.azure -v ${h.TEMP_DIRECTORY}:${y} `;l+=` ${o} `;l+=`-e GITHUB_WORKSPACE=${_} `;l+=`-e GITHUB_ENV=${a} `;l+=`--name ${t} `;l+=` mcr.microsoft.com/azure-cli:${i} ${n}`;console.log(`${m}${i}`);yield executeDockerCommand(l);console.log("az script ran successfully.")}catch(e){c.error(e);c.setFailed(e.stderr)}finally{const r=d.join(h.TEMP_DIRECTORY,e);yield h.deleteFile(r);console.log("cleaning up container...");yield executeDockerCommand(` container rm --force ${t} `,true)}}));const checkIfValidCLIVersion=e=>s(void 0,void 0,void 0,(function*(){const t=yield getAllAzCliVersions();if(!t||t.length==0){return true}return t.some((t=>t.toLowerCase()===e))}));const getAllAzCliVersions=()=>s(void 0,void 0,void 0,(function*(){var e="";var t={outStream:new h.NullOutstreamStringWritable({decodeStrings:false}),listeners:{stdout:t=>e+=t.toString()+u.EOL}};try{yield a.exec(`curl --location -s https://mcr.microsoft.com/v2/azure-cli/tags/list`,[],t);if(e&&JSON.parse(e).tags){return JSON.parse(e).tags}}catch(t){c.warning(`Unable to fetch all az cli versions, please report it as an issue on https://github.com/Azure/CLI/issues. Output: ${e}, Error: ${t}`)}return[]}));const executeDockerCommand=(e,t=false)=>s(void 0,void 0,void 0,(function*(){const r=yield l.which("docker",true);var i="";var n=false;var o={outStream:new h.NullOutstreamStringWritable({decodeStrings:false}),listeners:{stdout:e=>console.log(e.toString()),errline:e=>{if(!n){i+=e+u.EOL}else{console.log(e)}if(e.trim()===m){n=true;i=""}}}};var s;try{s=yield a.exec(`"${r}" ${e}`,[],o)}catch(e){if(!t){throw e}c.warning(e)}finally{if(s!==0&&!t){throw new Error(i||"az cli script failed.")}c.warning(i)}}));t.run()},149:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){if(i===undefined)i=r;Object.defineProperty(e,i,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,i){if(i===undefined)i=r;e[i]=t[r]});var n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))i(t,e,r);n(t,e);return t};var s=this&&this.__awaiter||function(e,t,r,i){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function fulfilled(e){try{step(i.next(e))}catch(e){n(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){n(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.checkIfEnvironmentVariableIsOmitted=t.NullOutstreamStringWritable=t.getCurrentTime=t.giveExecutablePermissionsToFile=t.deleteFile=t.createScriptFile=t.TEMP_DIRECTORY=void 0;const c=r(781);const a=o(r(49));const l=o(r(127));const u=o(r(17));const d=o(r(37));const f=o(r(147));t.TEMP_DIRECTORY=process.env.RUNNER_TEMP||d.tmpdir();t.createScriptFile=e=>s(void 0,void 0,void 0,(function*(){const r=`AZ_CLI_GITHUB_ACTION_${t.getCurrentTime().toString()}.sh`;const i=u.join(t.TEMP_DIRECTORY,r);f.writeFileSync(i,`${e}`);yield t.giveExecutablePermissionsToFile(i);return r}));t.deleteFile=e=>s(void 0,void 0,void 0,(function*(){if(f.existsSync(e)){try{f.unlinkSync(e)}catch(e){l.warning(e.toString())}}}));t.giveExecutablePermissionsToFile=e=>s(void 0,void 0,void 0,(function*(){return yield a.exec(`chmod +x ${e}`,[],{silent:true})}));t.getCurrentTime=()=>(new Date).getTime();class NullOutstreamStringWritable extends c.Writable{constructor(e){super(e)}_write(e,t,r){if(r){r()}}}t.NullOutstreamStringWritable=NullOutstreamStringWritable;t.checkIfEnvironmentVariableIsOmitted=e=>{const t=["LANG","HOSTNAME","PWD","HOME","PYTHON_VERSION","PYTHON_PIP_VERSION","SHLVL","PATH","GPG_KEY","CONDA","AGENT_TOOLSDIRECTORY","GITHUB_WORKSPACE","GITHUB_ENV","RUNNER_PERFLOG","RUNNER_WORKSPACE","RUNNER_TEMP","RUNNER_TRACKING_ID","RUNNER_TOOL_CACHE","DOTNET_SKIP_FIRST_TIME_EXPERIENCE","JOURNAL_STREAM","DEPLOYMENT_BASEPATH","VCPKG_INSTALLATION_ROOT","PERFLOG_LOCATION_SETTING"];const r=["JAVA_","LEIN_","M2_","BOOST_","GOROOT","ANDROID_","GRADLE_","ANT_","CHROME","SELENIUM_","INPUT_"];for(let r=0;r<t.length;r++){if(t[r]===e.toUpperCase()){return true}}return r.some((t=>e.toUpperCase().startsWith(t)))}},491:e=>{e.exports=require("assert")},81:e=>{e.exports=require("child_process")},361:e=>{e.exports=require("events")},147:e=>{e.exports=require("fs")},37:e=>{e.exports=require("os")},17:e=>{e.exports=require("path")},781:e=>{e.exports=require("stream")},837:e=>{e.exports=require("util")}};var t={};function __nccwpck_require__(r){var i=t[r];if(i!==undefined){return i.exports}var n=t[r]={exports:{}};var o=true;try{e[r].call(n.exports,n,n.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return n.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r=__nccwpck_require__(116);module.exports=r})();