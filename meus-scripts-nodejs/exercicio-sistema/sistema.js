const os = require('os');
const process = require('process');
const sistemaOperacional = os.platform();
let nomeSistema;
if(sistemaOperacional === 'win32') {
    nomeSistema = 'Windows';
}else if (sistemaOperacional === 'darwin'){
    nomeSistema = 'macOS';
}else if (sistemaOperacional === 'linux'){
    nomeSistema = 'Linux';
}else {
    nomeSistema = 'Sistema Desconhecido';
}
const memoriaBytes = os. totalmem();
const memoriaGB = (memoriaBytes / (1024* 1024* 1024)).toFixed(2);
const numeroCPUs = os.cpus().length;
const tempoLigadoSegundos = os.uptime();
const horas = Math. floor(tempoLigadoSegundos / 3600);
const minutos = Math.floor((tempoLigadoSegundos % 3600) / 60);
const nomeUsuario = os.userInfo().username;
console.log('💻 === INFORMAÇÕES DO SISTEMA ===\n');
console.log('💻 Sistema Operacional:', nomeSistema);
console.log('🧠 Memória RAM Total:', memoriaGB, 'GB');
console.log('⚡ Processadores (CPUs):', numeroCPUs);
console.log('⏰ Tempo Ligado:', horas, 'horas,', minutos, 'minutos');
console.log('👤 Usuário:', nomeUsuario) ;
console.log('\n✅ Análise concluída com sucesso!');