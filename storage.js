const HomeInventoryDatabase = {}


HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []


// These are furniture data item
const couch = {
  name: "leatherCouch",
  location: "livingRoom",
  description: "I enjoy relaxing on my couch and watching TV "
}

const LaptopTable = {
    name: "LaptopTable",
    location: "BedRoom",
    description: "I enjoy working on laptop on this table "
  }

  const ArtTable= {
    name: "ArtTable",
    location: "livingRoom",
    description: "I like ArtTable because my daughter loves to do crafts, artwork,etc on it"
  }

// These are Electronics data item
const Ipad = {
  name: "Ipad",
  location: "livingRoom",
  description:" I like it because my daughter loves to play Roblox and other games on it"
}

const Printer = {
    name: "Printer",
    location: "BedRoom",
    description: "Very helpful..Old but works very well!! "

  }

  const TV = {
    name: "TV",
    location: "BedRoom",
    description: "Me and my daughter enjoy watching TV together "
  }

  const Mylaptop = {
    name: "MyLaptop",
    location: "BedRoom",
    description: "Love working on it "

  }
  const BluetoothSpeaker = {
    name: "Bose",
    location: "livingRoom",
    description: "we enjoy its sound"
  }

  const FlowerVase = {
    name: "FlowerVase",
    location: "livingRoom",
    description: "I love it because i made it. "
  }

  const kidsCrafts = {
    name: "craftsBySonu",
    location: "livingRoom",
    description: "I love all crafts made by my daughter "
  }


HomeInventoryDatabase.crafts.push(FlowerVase,kidsCrafts)
HomeInventoryDatabase.furniture.push(couch,ArtTable,LaptopTable)
HomeInventoryDatabase.electronics.push(Ipad, Printer, TV, Mylaptop,BluetoothSpeaker)



    
    const stringifiedDatabase = JSON.stringify(HomeInventoryDatabase)

    localStorage.setItem("HomeInventory", stringifiedDatabase)




  
    
    


 





