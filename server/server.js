const express = require('express')
const app = express()
const harrow = require('../data/Harrow.json')
const heathrow = require('../data/Heathrow.json')
const stratford = require('../data/Stratford.json')

const allCities = [{ harrow }, { heathrow }, { stratford }]

app.get('/api/pharmacies', (req, res, next) => {
  res.json(
    harrow.pharmacies.concat(heathrow.pharmacies).concat(stratford.pharmacies),
  )
})

app.get('/api/colleges', (req, res) => {
  res.json(harrow.colleges.concat(heathrow.colleges).concat(stratford.colleges))
})

app.get('/api/doctors', (req, res) => {
  res.json(harrow.doctors.concat(heathrow.doctors).concat(stratford.doctors))
})

app.get('/api/hospitals', (req, res) => {
  res.json(
    harrow.hospitals.concat(heathrow.hospitals).concat(stratford.hospitals),
  )
})

app.get('/api/:area/pharmacies', (req, res) => {
  const area = req.params.area
  let result = {}
  switch (area) {
    case 'harrow':
      result = harrow['pharmacies']
      break
    case 'heathrow':
      result = heathrow['pharmacies']
      break
    case 'stratford':
      result = stratford['pharmacies']
      break
  }

  res.send(result)
})

app.get('/api/:area/colleges', (req, res) => {
  const area = req.params.area
  let result = {}
  switch (area) {
    case 'harrow':
      result = harrow['colleges']
      break
    case 'heathrow':
      result = heathrow['colleges']
      break
    case 'stratford':
      result = stratford['colleges']
      break
  }

  res.send(result)
})

app.get('/api/:area/doctors', (req, res) => {
  const area = req.params.area
  let result = {}
  switch (area) {
    case 'harrow':
      result = harrow['doctors']
      break
    case 'heathrow':
      result = heathrow['doctors']
      break
    case 'stratford':
      result = stratford['doctors']
      break
  }

  res.send(result)
})

app.get('/api/:area/hospitals', (req, res, next) => {
  const area = req.params.area
  let result = {}
  switch (area) {
    case 'harrow':
      result = harrow['hospitals']
      break
    case 'heathrow':
      result = heathrow['hospitals']
      break
    case 'stratford':
      result = stratford['hospitals']
      break
  }

  res.send(result)
})

app.get('/', (req, res, next) => {
  res.send(`<div style="font-size:28px; line-height: 1.6"><h2>London Mini Guide API!</h2> You can use:
            <ul> 
              <li><strong>/api/area</strong> to get all area guide</li>
              <li><strong>/api/area/pharmacies</strong> to get pharmacies data of selected area</li>
              <li><strong>/api/area/colleges</strong> to get colleges data of selected area</li>
              <li><strong>/api/area/doctors</strong> to get doctors data of selected area</li>
              <li><strong>/api/area/hospitals</strong> to get hospitals data of selected area</li>
              <li><strong>/api/pharmacies</strong> to get pharmacies data of London</li>
              <li><strong>/api/colleges</strong> to get colleges data of London</li>
              <li><strong>/api/doctors</strong> to get doctors data of London</li>
              <li><strong>/api/hospitals</strong> to get all hospitals data of London</li>
            </ul></div>`)
})

app.get('/*', (req, res, next) => {
  res.redirect('/')
})

const port = process.env.port || 5000
app.listen(port, () => {
  console.log(`App listening on port: ${port}`)
})
