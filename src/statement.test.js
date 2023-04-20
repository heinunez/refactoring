const { PLAYS, INVOICES } = require("./constants");
const statement = require("./statement");

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
