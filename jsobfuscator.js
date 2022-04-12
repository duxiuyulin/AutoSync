var JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');

let rawdata = fs.readFileSync('./222.js', 'utf-8');

var obfuscationResult = JavaScriptObfuscator.obfuscate(rawdata, {
    compact: true,//压缩
    controlFlowFlattening: true,//控制流平坦化
    controlFlowFlatteningThreshold: 1,//控制流平坦阈值
    deadCodeInjection: true,//死代码注入
    deadCodeInjectionThreshold: 1,//死代码注入阈值
    debugProtection: false,//调试保护
    debugProtectionInterval: 100,//调试保护间隔
    disableConsoleOutput: false,//禁用控制台输出
    identifierNamesGenerator: 'hexadecimal',//标识符名称生成器
    log: false,//日志
    numbersToExpressions: true,//数字到表达式
    renameGlobals: false,//重命名全局
    selfDefending: true,//自我防卫
    simplify: true,//简化
    splitStrings: true,//拆分字符串
    splitStringsChunkLength: 5,//拆分字符串块长度
    stringArray: true,//字符串数组
    stringArrayEncoding: ['rc4'],//字符串数组编码：
    stringArrayIndexShift: true,//字符串数组索引移位
    stringArrayRotate: true,//字符串数组旋转
    stringArrayShuffle: true,//字符串数组洗牌
    stringArrayWrappersCount: 5,//字符串数组包装器计数
    stringArrayWrappersChainedCalls: true,//字符串数组包装器链接调用
    stringArrayWrappersParametersMaxCount: 5,//字符串数组包装器参数最大计数
    stringArrayWrappersType: 'function',//字符串数组包装器类型
    stringArrayThreshold: 1,//字符串数组阈值
    transformObjectKeys: false,//变换对象关键帧
    unicodeEscapeSequence: true//unicode转义序列
});

let codeStr = obfuscationResult.getObfuscatedCode()
//console.log(obfuscationResult.getObfuscatedCode());
//fs.writeFileSync('./jsobfuscator_out.js', codeStr);
//eval(codeStr);

fs.writeFile('./jsobfuscator_out.js', codeStr, () => {
    console.log('写入完成!');
});
























