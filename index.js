#!/usr/bin/env node

const brandBg = '\x1b[48;2;74;37;170m';
const whiteFg = '\x1b[38;2;255;255;255m';
const reset = '\x1b[0m';

function brandLog(msg) {
  console.log(`${brandBg}${whiteFg} ${msg} ${reset}`);
}

brandLog('===============================================================');
brandLog('   Welcome to Milient!                                         ');
brandLog('   This is a placeholder package for Milient Software.         ');
brandLog('   For more information, visit: https://milientsoftware.com/   ');
brandLog('===============================================================');
