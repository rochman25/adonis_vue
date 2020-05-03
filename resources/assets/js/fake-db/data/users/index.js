import mock from "@/fake-db/mock.js";

const data = {
    users: [
        //
        {
            _id: { $oid: "5e9bde63576abe634ae10be4" },
            username: "zaenur",
            password: "$2a$10$0xXSzIx5dntOyjF.e/SBe.TSH68AtBD6UtHVx1pbozHPUloy9uzzi",
            email: "zaenur.rochman98@gmail.com",
            created_at: { $date: { $numberLong: "1587273315241" } },
            updated_at: { $date: { $numberLong: "1587273315242" } }
        }
    ]
};

mock.onGet("/api/users/list").reply(() => {
    return [200, JSON.parse(JSON.stringify(data.users)).reverse()];
});