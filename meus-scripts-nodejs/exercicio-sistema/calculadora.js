console. log('=== CALCULADORA SIMPLES === ');
console.log('');
const args = process.argv.slice(2);
console. log('📥Argumentos recebidos:', args);
console.log('');
if (args.length !== 3) {
    console.log('❌ Ops! Você precisa digitar exatamente 3 coisas:');
    console.log('📖Uso correto: node calculadora. js <numero1> <operacao> <numero2>');
    console.log('');
    console. log('💡Exemplos válidos:');
    console.log(' node calculadora.js 10 + 5');
    console. log(' node calculadora.js 20.5 - 3.2');
    console.log(' node calculadora.js 7 * 8');
    console.log(' node calculadora.js 15 / 3');
    console.log('');
    console.log(' Operações disponíveis: + - * /');
    process.exit(1);
}
const num1 = parseFloat(args[0]); 
const operacao = args[1];
const num2 = parseFloat(args[2]); 
if (isNaN(num1) || isNaN(num2)) {
    console.log('❌ Erro: Os valores devem ser números válidos!');
    console.log('');
    console.log('💡Exemplos de números válidos: ');
    console.log('✅ 10, 5.5, -3, 0, 100.25');
    console.log('❌ abc, 10a, texto, vazio');
    console.log('');
    console.log('🔁Tente novamente com números válidos.');
    process.exit(1);
}
console.log(`Calculando: ${num1} ${operacao} ${num2}`);
console.log('');
let resultado;
switch (operacao) {
    case '+':
       resultado = num1 + num2;
       console.log('➕ Realizando soma ...');
       break;
    case '-':
       resultado = num1 - num2;
       console.log('➖ Realizando subtração ...');
       break;
    case '*':
       resultado = num1 * num2;
       console.log('✖️ Realizando multiplicação ...');
       break;
    case '/':
       if (num2 === 0){
           console.log('❌Erro: Não é possível dividir por zero!');
           console.log('');
           console.log('🤓Explicação: Na matemática, divisão por zero é indefinida.')
           console.log(' 💡Tente usar um número diferente de zero como divisor.');
           process.exit(1);
        }
        resultado = num1 / num2;
        console.log('➗ Realizando divisão ...');
        break;

        default:
            console.log(`❌Erro: Operação '${operacao}' não é válida!`);
            console.log('');
            console. log('⚙️Operações disponíveis:');
            console. log(' + (soma)');
            console. log('- (subtração)');
            console. log('* (multiplicação)');
            console. log('/ (divisão)');
            console.log('');
            console. log('🔁Tente novamente com uma operação válida.');
            process.exit(1);
    }

console.log('');
console.log('🎉=== RESULTADO === ');
console.log(`${num1} ${operacao} ${num2} = ${resultado}`);

if (operacao === '/' && resultado % 1 !== 0) {
    console.log(`📊 Resultado detalhado: ${resultado.toFixed(6)}`);

if (resultado < 0) {
    console.log('📝 Nota: O resultado é negativo.');
} else if (resultado ===0) {
    console.log('📝Nota: O resultado é zero.');
} else if (resultado > 1000) {
    console.log('📝 Nota: Resultado grande! 🚀');
}
console.log('');
console. log('✅ Cálculo concluído com sucesso!');
}
