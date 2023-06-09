const Event = require('../../models/event')

module.exports = {
    index,
    create,
    detail,
    deleteEvent,
    update
}

async function index(req, res) {
    try {
      const userId = req.user._id;
      const searchQuery = req.query.search || '';
      const events = await Event.find({ uploaded_by: userId, name: { $regex: searchQuery, $options: 'i' } }).sort('date');
      res.status(200).json(events);
    } catch (err) {
      res.status(400).json(err);
    }
  }

async function create(req, res){
    try{
        req.body.uploaded_by = req.user._id;
        const newEvent = await Event.create(req.body);
        res.status(201).json(newEvent)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function detail(req, res){
    try{
        const event = await Event.findById(req.params.id)
        res.status(200).json(event)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteEvent(req, res){
    try{
        await Event.findByIdAndDelete(req.params.id)
        res.status(200).json({
            data: 'success'
        })
    }catch(err){
        res.status(400).json(err)
    }
}

async function update(req, res){
    try{
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedEvent)
    }catch(err){
        console.log(err);
        res.status(400).json('Bad Request')
    }
}