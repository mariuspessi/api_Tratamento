import { db } from "../db.js";


export const getUsers = (_, res) => {
    const q = "Select * from tbpoco_eta";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q =
      "INSERT INTO tbpoco_eta( `phP1Bruto`, `phP1Trat`, `cloro`, `condtBruto`, `condtTrat`,`alcBruto`,`alcTrat`,`durBruto`, `durTrat`) VALUES(?)";

      const values = [
        req.body.phP1Bruto,
        req.body.phP1Trat,
        req.body.cloro,
        req.body.condtBruto,
        req.body.condtTrat,
        req.body.alcBruto,
        req.body.alcTrat,
        req.body.durBruto,
        req.body.durTrat,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso");
    });

};

export const updateUser = (req, res) => {
    const q =
      "UPDATE tbpoco_eta SET `phP1Bruto` = ?, `phP1Trat` = ?, `cloro` = ?, `condtBruto` = ?, `condtTrat` = ?,`alcBruto` = ?, `alcTrat` = ?,`durBruto` = ?, `durTrat` = ? where `id` = ?";

      const values = [
        req.body.phP1Bruto,
        req.body.phP1Trat,
        req.body.cloro,
        req.body.condtBruto,
        req.body.condtTrat,
        req.body.alcBruto,
        req.body.alcTrat,
        req.body.durBruto,
        req.body.durTrat,
    ];

    db.query(q, [...values,req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso");
    });

};

export const deleteUser = (req, res) => {
    const q =
      "DELETE FROM tbpoco_eta WHERE `id` = ?";
    
    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso");
    });

};