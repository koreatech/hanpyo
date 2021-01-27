module.exports = {
    "presets" : ["@babel/preset-typescript"],
    "env":{
        "test":{
            "plugins" : ["transform-es2015-modules-commonjs"]
        }
    }
}
