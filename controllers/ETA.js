import { db } from "../db.js";


export const getUsers = (_, res) => {
    const q = "Select * from tbestacao_eta";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q =
      "INSERT INTO tbestacao_eta( `phRio`, `phFiltro`, `phTratada`, `phReservatorio`, `condtRio`, `condtTrat`, `durRio`, `durTrat`, ` alcRio `, ` alcTrat`, `cloroTrat`, `cloroReserv` ) VALUES(?)";

      const values = [
        req.body.phRio,
        req.body.phFiltro,
        req.body.phTratada,
        req.body.phReservatorio,
        req.body.condtRio,
        req.body.condtTrat,
        req.body.durRio,
        req.body.durTrat,
        req.body.alcRio,
        req.body.alcTrat,
        req.body.cloroTrat,
        req.body.cloroReserv,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso");
    });

};

export const updateUser = (req, res) => {
    const q =
      "UPDATE tbestacao_eta SET `phRio` = ?, `phFiltro` = ?, `phTratada` = ?, `phReservatorio` = ?, `condtRio` = ?, `condtTrat`= ?, `durRio` = ?, `durTrat` = ?, ` alcRio ` = ?, ` alcTrat`= ?, `cloroTrat`= ?, `cloroReserv`= ?  where `id` = ?";

      const values = [
        req.body.phRio,
        req.body.phFiltro,
        req.body.phTratada,
        req.body.phReservatorio,
        req.body.condtRio,
        req.body.condtTrat,
        req.body.durRio,
        req.body.durTrat,
        req.body.alcRio,
        req.body.alcTrat,
        req.body.cloroTrat,
        req.body.cloroReserv,
    ];

    db.query(q, [...values,req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso");
    });

};

export const deleteUser = (req, res) => {
    const q =
      "DELETE FROM tbestacao_eta WHERE `id` = ?";
    
    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso");
    });

};