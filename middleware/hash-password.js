require("dotenv").config();

const bcrypt = require("bcrypt");
const saltRounds = +process.env.PASSWORD_SALT_ROUNDS;

async function hashPassword(plainTextPassword) {
  let generatedSalt;
  try {
    generatedSalt = await bcrypt.genSalt(saltRounds);
  } catch (error) {
    throw `Salt generation error: ${error}`;
  }

  try {
    return await bcrypt.hash(plainTextPassword, generatedSalt);
  } catch (error) {
    throw `Hashing error: ${error}`;
  }
}

async function testPassword(plainTextPassword, hash) {
  return await bcrypt.compare(plainTextPassword, hash);
}

module.exports.hashPassword = hashPassword;
module.exports.testPassword = testPassword;

/**
 * Time taken on my local:
 * Salt   |
 * Rounds | time (ms)
 * -------|----------
 *  1 - 4 |     1
 *      5 |     3
 *      6 |     5
 *      7 |    10
 *      8 |    20
 *      9 |    40
 *     10 |    80
 *     11 |   150
 *     12 |   300
 *     13 |   600
 *     14 |  1200
 *     15 |  2400
 *     16 |  4700
 *     17 |  9400
 *     18 | 19000
 *     19 | 40000
 *     20 | 77000
 */
