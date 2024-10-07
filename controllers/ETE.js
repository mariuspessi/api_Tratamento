import { db } from "../db.js";


export const getUsers = (_, res) => {
    const q = "Select * from tbEstacao_ete";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q =
      "INSERT INTO (`data`,`hora`, `eficiencia`,`dqoD1`,`phD1`,`tempD1`,`solidosD1`,`vazao`,`CargaOrgD1 `,`dqoSFlot `,`phSFloat `,`tempSFloat `,`solidosSFloat `,`ssSFloat`, `dqoRio`,`phRio`,`tempRio `,`oxRio `,`solidosRio `,`phSec `,`solidosSec `,`vazaoSec`,`phTerc`,`solidosTerc`,`vazaoTerc`,`dqoDecSec`,`phDecSec`,`tempDecSec`,`solidoDecSec`,`oxDisDecSec`,`user.vazaoDecSec`,`user.dqoDecTerc`,`user.phDecTerc`,`tempDecTerc`,`solidoDecTerc`,`oxDisDecTerc`,`vazaoDecTerc`,`eficBio`,`eficProc`,`dqoMont`,`phMont`,`tempMont`,`oxMont`,`solidoMont`,`dqoJust`,`phJust`,`tempJust`,`oxJust`,`solidoJust`,`dqoL1`,`phL1`,`tempL1`,`oxL1`,`solidoL1`,`user.ssL1`,`nitroL1`,`fosfL1`,`relFML1`,`ivlL1`,`prodLodoL1`,`retHidroL1`,`dqoL2`,`phL2`,`oxL2`,`solidoL2`,`ssL2`,`nitroL2`,`fosfL2`,`relFML2`,`ilvL2`,`prodLodoL2`,`retHidroL2`,`analist`) VALUES(?)";

      const values = [
       
        req.body.data,
        req.body.hora,
        req.body.eficiencia,
        req.body.dqoD1,
        req.body.phD1,
        req.body.tempD1,
        req.body.solidosD1,
        req.body.vazao,
        req.body.CargaOrgD1,
        req.body.dqoSFlot,
        req.body.phSFloat,
        req.body.tempSFloat,
        req.body.solidosSFloat,
        req.body.ssSFloat,
        req.body.dqoRio,
        req.body.phRio,
        req.body.tempRio,
        req.body.oxRio,
        req.body.solidosRio,
        req.body.phSec,
        req.body.solidosSec,
        req.body.vazaoSec,
        req.body.phTerc,
        req.body.solidosTerc,
        req.body.vazaoTerc,
        req.body.dqoDecSec,
        req.body.phDecSec,
        req.body.tempDecSec,
        req.body.solidoDecSec,
        req.body.oxDisDecSec,
        req.body.vazaoDecSec,
        req.body.dqoDecTerc,
        req.body.phDecTerc,
        req.body.tempDecTerc,
        req.body.solidoDecTerc,
        req.body.oxDisDecTerc,
        req.body.vazaoDecTerc,
        req.body.eficBio,
        req.body.eficProc,
        req.body.dqoMont,
        req.body.phMont,
        req.body.tempMont,
        req.body.oxMont,
        req.body.solidoMont,
        req.body.dqoJust,
        req.body.phJust,
        req.body.tempJust,
        req.body.oxJust,
        req.body.solidoJust,
        req.body.dqoL1,
        req.body.phL1,
        req.body.tempL1,
        req.body.oxL1,
        req.body.solidoL1,
        req.body.ssL1,
        req.body.nitroL1,
        req.body.fosfL1,
        req.body.relFML1,
        req.body.ivlL1,
        req.body.prodLodoL1,
        req.body.retHidroL1,
        req.body.dqoL2,
        req.body.phL2,
        req.body.oxL2,
        req.body.solidoL2,
        req.body.ssL2,
        req.body.nitroL2,
        req.body.fosfL2,
        req.body.relFML2,
        req.body.ilvL2,
        req.body.prodLodoL2,
        req.body.retHidroL2,
        req.body.analist,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso");
    });

};

export const updateUser = (req, res) => {
    const q =
      "UPDATE  where `id` = ?";

      const values = [
        req.body.data,
        req.body.hora,
        req.body.eficiencia,
        req.body.dqoD1,
        req.body.phD1,
        req.body.tempD1,
        req.body.solidosD1,
        req.body.vazao,
        req.body.CargaOrgD1,
        req.body.dqoSFlot,
        req.body.phSFloat,
        req.body.tempSFloat,
        req.body.solidosSFloat,
        req.body.ssSFloat,
        req.body.dqoRio,
        req.body.phRio,
        req.body.tempRio,
        req.body.oxRio,
        req.body.solidosRio,
        req.body.phSec,
        req.body.solidosSec,
        req.body.vazaoSec,
        req.body.phTerc,
        req.body.solidosTerc,
        req.body.vazaoTerc,
        req.body.dqoDecSec,
        req.body.phDecSec,
        req.body.tempDecSec,
        req.body.solidoDecSec,
        req.body.oxDisDecSec,
        req.body.vazaoDecSec,
        req.body.dqoDecTerc,
        req.body.phDecTerc,
        req.body.tempDecTerc,
        req.body.solidoDecTerc,
        req.body.oxDisDecTerc,
        req.body.vazaoDecTerc,
        req.body.eficBio,
        req.body.eficProc,
        req.body.dqoMont,
        req.body.phMont,
        req.body.tempMont,
        req.body.oxMont,
        req.body.solidoMont,
        req.body.dqoJust,
        req.body.phJust,
        req.body.tempJust,
        req.body.oxJust,
        req.body.solidoJust,
        req.body.dqoL1,
        req.body.phL1,
        req.body.tempL1,
        req.body.oxL1,
        req.body.solidoL1,
        req.body.ssL1,
        req.body.nitroL1,
        req.body.fosfL1,
        req.body.relFML1,
        req.body.ivlL1,
        req.body.prodLodoL1,
        req.body.retHidroL1,
        req.body.dqoL2,
        req.body.phL2,
        req.body.oxL2,
        req.body.solidoL2,
        req.body.ssL2,
        req.body.nitroL2,
        req.body.fosfL2,
        req.body.relFML2,
        req.body.ilvL2,
        req.body.prodLodoL2,
        req.body.retHidroL2,
        req.body.analist,
    ];

    db.query(q, [...values,req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso");
    });

};

export const deleteUser = (req, res) => {
    const q =
      "DELETE FROM tbEstacao_ete WHERE `id` = ?";
    
    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso");
    });

};


            !user.data
            hora
            !user.eficiencia
            !user.dqoD1
            !user.phD1
            !user.tempD1
            !user.solidosD1
            !user.vazao
            !user.CargaOrgD1
            user.dqoSFlot
            user.phSFloat
            user.tempSFloat
            user.solidosSFloat
            user.ssSFloat
            user.dqoRio
            user.phRio
            user.tempRio
            user.oxRio
            user.solidosRio
            user.phSec
            user.solidosSec
            user.vazaoSec
            user.phTerc
            user.solidosTerc
            user.vazaoTerc
            user.dqoDecSec
            user.phDecSec
            user.tempDecSec
            user.solidoDecSec
            user.oxDisDecSec
            user.vazaoDecSec
            user.dqoDecTerc
            user.phDecTerc
            user.tempDecTerc
            user.solidoDecTerc
            user.oxDisDecTerc
            user.vazaoDecTerc
            user.eficBio
            user.eficProc
            user.dqoMont
            user.phMont
            user.tempMont
            user.oxMont
            user.solidoMont
            user.dqoJust
            user.phJust
            user.tempJust
            user.oxJust
            user.solidoJust
            user.dqoL1
            user.phL1
            user.tempL1
            user.oxL1
            user.solidoL1
            user.ssL1
            user.nitroL1
            user.fosfL1
            user.relFML1
            user.ivlL1
            user.prodLodoL1
            user.retHidroL1
            user.dqoL2
            user.phL2
            user.oxL2
            user.solidoL2
            user.ssL2
            user.nitroL2
            user.fosfL2
            user.relFML2
            user.ilvL2
            user.prodLodoL2
            retHidroL2
            analist