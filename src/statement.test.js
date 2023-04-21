const { PLAYS, INVOICES } = require("./constants");
const { statement, htmlStatement } = require("./statement");

test("expect statement to be correct", () => {
    const firstInvoice = INVOICES[0];
    const result = statement(firstInvoice, PLAYS);

    const expectedStatement =
        [
            "Statement for BigCo",
            "  Hamlet: $650.00 (55 seats)",
            "  As You Like It: $580.00 (35 seats)",
            "  Othello: $500.00 (40 seats)",
            "Amount owed is $1,730.00",
            "You earned 47 credits",
            ""
        ].join("\n");

    expect(result).toBe(expectedStatement);
});

test("expect html statement to be correct", () => {
    const firstInvoice = INVOICES[0];
    const result = htmlStatement(firstInvoice, PLAYS);

    const expectedStatement =
        [
            "<h1>Statement for BigCo</h1>",
            "<table>",
            "<tr><th>play</th><th>seats</th><th>cost</th></tr>",
            "  <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>",
            "  <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>",
            "  <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>",
            "</table>",
            "<p>Amount owed is <em>$1,730.00</em></p>",
            "<p>You earned <em>47</em> credits</p>",
            ""
        ].join("\n");

    expect(result).toBe(expectedStatement);
});
