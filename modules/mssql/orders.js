const express = require('express')
const router = express.Router()
const { sql, poolPromise } = require('./modules/config')

router.post('/ordersShow', async (req, res) => {
  try {
    const pool = await poolPromise
    const queryResult = await pool.request()
      .input('locale', sql.VarChar, req.headers['clientlocale'])
      .execute('orders_OrdersShow')

    res.json({ 
      result: queryResult.recordset
    })
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})
router.post('/orderNew', async (req, res) => {
  try {
    let form = req.body.form
    const pool = await poolPromise
    const queryResult = await pool.request()
      .input('OrderDate', sql.Date, form.OrderDate)
      .input('ProjectID', sql.VarChar, form.ProjectID)
      .input('Status', sql.Varchar, form.Status)
      .input('AssistantID', sql.VarChar, form.AssistantID)
      .input('CreateID', sql.VarChar, form.CreateID)
      .input('Certificate1', sql.VarChar, form.Certificate1)
      .input('Certificate2', sql.VarChar, form.Certificate2)
      .input('Amount', sql.Decimal, form.Amount)
      .execute('orders_OrderNew')

      if (queryResult.recordset[0].code !== 200 ){
        res.status(queryResult.recordset[0].code)
        res.send(queryResult.recordset[0].message)
      }
      
    res.json({ 
      result: queryResult.recordset
    })
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})
router.post('/orderEdit', async (req, res) => {
  try {
    let form = req.body.form
    const pool = await poolPromise
    const queryResult = await pool.request()
      .input('ID', sql.NVarChar, form.ID)
      .input('OrderDate', sql.Date, form.OrderDate)
      .input('ProjectID', sql.VarChar, form.ProjectID)
      .input('Status', sql.Varchar, form.Status)
      .input('AssistantID', sql.VarChar, form.AssistantID)
      .input('CreateID', sql.VarChar, form.CreateID)
      .input('Certificate1', sql.VarChar, form.Certificate1)
      .input('Certificate2', sql.VarChar, form.Certificate2)
      .input('Amount', sql.Decimal, form.Amount)
      .execute('orders_OrderEdit')

      if (queryResult.recordset[0].code !== 200 ){
        res.status(queryResult.recordset[0].code)
        res.send(queryResult.recordset[0].message)
      }
      
    res.json({ 
      result: queryResult.recordset
    })
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})
router.post('/orderCustomerNew', async (req, res) => {
  try {
    let form = req.body.form
    const pool = await poolPromise
    const queryResult = await pool.request()
      .input('OrderID', sql.VarChar, form.OrderID)
      .input('CustomerID', sql.VarChar, form.CustomerID)     
      .input('TelHome', sql.NVarChar, form.TelHome)
      .input('TelMobile', sql.NVarChar, form.TelMobile)
      .input('EMail', sql.NVarChar, form.EMail)
      .input('Country', sql.Varchar, form.Country)
      .input('City', sql.Varchar, form.City)
      .input('Post', sql.Varchar, form.Post)
      .input('Address', sql.NVarChar, form.Address)
      .input('AgentID', sql.NVarChar, form.AgentID)
      .input('AgentName', sql.NVarChar, form.AgentName)
      .input('AgentCountry', sql.Varchar, form.AgentCountry)
      .input('AgentCity', sql.Varchar, form.AgentCity)
      .input('AgentPost', sql.Varchar, form.AgentPost)
      .input('AgentAddress', sql.NVarChar, form.AgentAddress)
      .input('BusinessID', sql.NVarChar, form.BusinessID)
      .execute('orders_OrderCustomerNew')

      if (queryResult.recordset[0].code !== 200 ){
        res.status(queryResult.recordset[0].code)
        res.send(queryResult.recordset[0].message)
      }
      
    res.json({ 
      result: queryResult.recordset
    })
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})
router.post('/orderCustomerEdit', async (req, res) => {
  try {
    let form = req.body.form
    const pool = await poolPromise
    const queryResult = await pool.request()
      .input('OrderID', sql.VarChar, form.OrderID)
      .input('CustomerID', sql.VarChar, form.CustomerID)     
      .input('TelHome', sql.NVarChar, form.TelHome)
      .input('TelMobile', sql.NVarChar, form.TelMobile)
      .input('EMail', sql.NVarChar, form.EMail)
      .input('Country', sql.Varchar, form.Country)
      .input('City', sql.Varchar, form.City)
      .input('Post', sql.Varchar, form.Post)
      .input('Address', sql.NVarChar, form.Address)
      .input('AgentID', sql.NVarChar, form.AgentID)
      .input('AgentName', sql.NVarChar, form.AgentName)
      .input('AgentCountry', sql.Varchar, form.AgentCountry)
      .input('AgentCity', sql.Varchar, form.AgentCity)
      .input('AgentPost', sql.Varchar, form.AgentPost)
      .input('AgentAddress', sql.NVarChar, form.AgentAddress)
      .input('BusinessID', sql.NVarChar, form.BusinessID)
      .execute('orders_OrderCustomerEdit')

      if (queryResult.recordset[0].code !== 200 ){
        res.status(queryResult.recordset[0].code)
        res.send(queryResult.recordset[0].message)
      }
      
    res.json({ 
      result: queryResult.recordset
    })
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})
router.post('/orderDetailNew', async (req, res) => {
  try {
    let form = req.body.form
    const pool = await poolPromise
    const queryResult = await pool.request()
      .input('OrderID', sql.VarChar, form.OrderID)
      .input('Seq', sql.TinyInt, form.Seq)     
      .input('ProjectID', sql.VarChar, form.ProjectID)
      .input('ProductID', sql.VarChar, form.ProductID)
      .input('Name', sql.NVarChar, form.Name)
      .input('Qty', sql.SmallInt, form.Qty)
      .execute('orders_OrderDetailNew')

      if (queryResult.recordset[0].code !== 200 ){
        res.status(queryResult.recordset[0].code)
        res.send(queryResult.recordset[0].message)
      }
      
    res.json({ 
      result: queryResult.recordset
    })
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})
router.post('/collectionRecordsNew', async (req, res) => {
  try {
    let form = req.body.form
    const pool = await poolPromise
    const queryResult = await pool.request()
      .input('InvoiceID', sql.VarChar, form.InvoiceID)
      .input('InvoiceDate', sql.Date, form.InvoiceDate)
      .input('OrderID', sql.VarChar, form.OrderID)
      .input('PaymentMethod', sql.Varchar, form.PaymentMethod)
      .input('ReceivedDate', sql.Date, form.ReceivedDate)
      .input('Amount', sql.Decimal, form.Amount)
      .input('Account', sql.VarChar, form.Account)
      .input('BankID', sql.Varchar, form.BankID)
      .input('Memo', sql.NVarChar, form.Memo)
      .input('ReceivedID', sql.VarChar, form.ReceivedID)
      .input('ChequeDate', sql.Date, form.ChequeDate)
      .execute('orders_CollectionRecordsNew')

    if (queryResult.recordset[0].code !== 200 ){
      res.status(queryResult.recordset[0].code)
      res.send(queryResult.recordset[0].message)
    }

    res.json({ 
      result: queryResult.recordset
    })
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})
router.post('/collectionRecordsEdit', async (req, res) => {
  try {
    let form = req.body.form
    const pool = await poolPromise
    const queryResult = await pool.request()
      .input('InvoiceID', sql.VarChar, form.InvoiceID)
      .input('InvoiceDate', sql.Date, form.InvoiceDate)
      .input('OrderID', sql.VarChar, form.OrderID)
      .input('PaymentMethod', sql.Varchar, form.PaymentMethod)
      .input('ReceivedDate', sql.Date, form.ReceivedDate)
      .input('Amount', sql.Decimal, form.Amount)
      .input('Account', sql.VarChar, form.Account)
      .input('BankID', sql.Varchar, form.BankID)
      .input('Memo', sql.NVarChar, form.Memo)
      .input('ReceivedID', sql.VarChar, form.ReceivedID)
      .input('ChequeDate', sql.Date, form.ChequeDate)
      .execute('orders_CollectionRecordsEdit')

    if (queryResult.recordset[0].code !== 200 ){
      res.status(queryResult.recordset[0].code)
      res.send(queryResult.recordset[0].message)
    }

    res.json({ 
      result: queryResult.recordset
    })
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})

router.post('/getDropdownList', async (req, res) => {
  try {
    const pool = await poolPromise
    const queryResult = await pool.request()
      .input('type', sql.NVarChar, req.body.type)
      .input('locale', sql.VarChar, req.headers['clientlocale'])
      .execute('orders_GetDropdownList')
      
    res.json({
      result: queryResult.recordset
    })
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})
router.post('/getObject', async (req, res) => {
  try {
    const pool = await poolPromise
    const queryResult = await pool.request()
      .input('type', sql.NVarChar, req.body.type)
      .input('ID', sql.NVarChar, req.body.ID)
      .execute('orders_GetObject')
      
    res.json({
      result: queryResult.recordset
    })
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})

module.exports = router