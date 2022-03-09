const React = requer('react');

function Def (html) {

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