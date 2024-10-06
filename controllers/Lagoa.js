import { db } from "../db.js";


export const getUsers = (_, res) => {
    const q = "Select * from tblagoa";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q =
      "INSERT INTO tblagoa( `phPonto1L1`, `phPonto2L1`, `phPonto3L1`, `phPonto4L1`, `phPonto1L2`, `phPonto2L2` , `phPonto2L3`, `phPonto2L4`) VALUES(?)";

      const values = [
        req.body.phPonto1L1,
        req.body.phPonto2L1,
        req.body.phPonto3L1,
        req.body.phPonto4L1,
        req.body.phPonto1L2,
        req.body.phPonto2L2,
        req.body.phPonto3L2,
        req.body.phPonto4L2,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Dados criados com sucesso");
    });

};

export const updateUser = (req, res) => {
    const q =
      "UPDATE usuarios SET  `phPonto1L1` = ?, `phPonto2L1` = ?, `phPonto3L1` = ?, `phPonto4L1` = ?, `phPonto1L2`= ?, `phPonto2L2`= ? , `phPonto2L3`= ? , `phPonto2L4`= ? where `id` = ?";

      const values = [
        req.body.phPonto1L1,
        req.body.phPonto2L1,
        req.body.phPonto3L1,
        req.body.phPonto4L1,
        req.body.phPonto1L2,
        req.body.phPonto2L2,
        req.body.phPonto3L2,
        req.body.phPonto4L2,
    ];

    db.query(q, [...values,req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Dados atualizados com sucesso");
    });

};

export const deleteUser = (req, res) => {
    const q =
      "DELETE FROM tblagoa WHERE `id` = ?";
    
    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Dados deletados com sucesso");
    });

};