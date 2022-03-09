const React = require('react');

const Def = (html) => {

    return (
        <html>
            <head>
                <title>title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def;