import { db } from "../db.js";


export const getEta = (_, res) => {
    const q = "Select * from tbestacao_eta";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addEta = (req, res) => {
    const q =
      "INSERT INTO tbestacao_eta(`dhata`, `hora`, `phRio`, `phFiltro`, `phTratada`, `phReservatorio`, `condtRio`, `condtTrat`, `durRio`, `durTrat`, `alcRio`, `alcTrat`, `cloroTrat`, `cloroReserv`, `analist`) VALUES (?)";

      const values = [
        req.body.dhata,
        req.body.hora,
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
        req.body.analist,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Análises criadas com sucesso");
    });

};

export const updateEta = (req, res) => {
    const q =
      "UPDATE tbestacao_eta SET  `dhata` = ? , `hora`= ?, `phRio` = ?, `phFiltro` = ?, `phTratada` = ?, `phReservatorio` = ?, `condtRio` = ?, `condtTrat`= ?, `durRio` = ?, `durTrat` = ?, `alcRio` = ?, `alcTrat`= ?, `cloroTrat`= ?, `cloroReserv`= ?, `analist`= ?  where `id` = ?";

      const values = [
        req.body.dhata,
        req.body.hora,
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
        req.body.analist,
    ];

    db.query(q, [...values,req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Análises atualizadas com sucesso");
    });

};

export const deleteEta = (req, res) => {
    const q =
      "DELETE FROM tbestacao_eta WHERE `id` = ?";
    
    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Analises deletadas com sucesso");
    });

};