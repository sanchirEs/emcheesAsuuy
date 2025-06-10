// debug-env.js
require('dotenv').config();

console.log('=== Environment Variables Debug ===');
console.log('DATABASE_URL loaded:', !!process.env.DATABASE_URL);
console.log('DIRECT_URL loaded:', !!process.env.DIRECT_URL);

if (process.env.DATABASE_URL) {
  const dbUrl = process.env.DATABASE_URL;
  console.log('\nDATABASE_URL breakdown:');
  console.log('- Full URL length:', dbUrl.length);
  console.log('- Contains pooler:', dbUrl.includes('pooler'));
  console.log('- Contains password:', dbUrl.includes('9lkE9wBXVZs2IMMB'));
  console.log('- Port 6543:', dbUrl.includes('6543'));
  console.log('- First 50 chars:', dbUrl.substring(0, 50) + '...');
}

if (process.env.DIRECT_URL) {
  const directUrl = process.env.DIRECT_URL;
  console.log('\nDIRECT_URL breakdown:');
  console.log('- Full URL length:', directUrl.length);
  console.log('- Contains pooler:', directUrl.includes('pooler'));
  console.log('- Port 5432:', directUrl.includes('5432'));
  console.log('- First 50 chars:', directUrl.substring(0, 50) + '...');
}

// Test actual connection
console.log('\n=== Testing Connection ===');
const { Client } = require('pg');

async function testConnection() {
  try {
    console.log('Testing DIRECT_URL connection...');
    const client = new Client({ 
      connectionString: process.env.DIRECT_URL,
      connectionTimeoutMillis: 5000,
    });
    
    await client.connect();
    console.log('✅ Connected successfully!');
    
    const result = await client.query('SELECT NOW() as current_time');
    console.log('⏰ Server time:', result.rows[0].current_time);
    
    await client.end();
    console.log('✅ Connection closed cleanly');
    
  } catch (error) {
    console.log('❌ Connection failed:');
    console.log('Error code:', error.code);
    console.log('Error message:', error.message);
    
    if (error.code === 'ENOTFOUND') {
      console.log('💡 DNS resolution failed - check hostname');
    } else if (error.code === 'ECONNREFUSED') {
      console.log('💡 Connection refused - check port and firewall');
    } else if (error.code === 'ETIMEDOUT') {
      console.log('💡 Connection timeout - check network/firewall');
    } else if (error.message.includes('authentication')) {
      console.log('💡 Authentication failed - check username/password');
    }
  }
}

testConnection();