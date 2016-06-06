User.destroy_all
guest = User.create(username: "guest", password: "password")
victor = User.create(username: "Victor", password: "password")
vincent = User.create(username: "Vincent", password: "password")
vanessa = User.create(username: "Vanessa", password: "password")
vincenzo = User.create(username: "Vincenzo", password: "password")
victoria = User.create(username: "Victoria", password: "password")
valentino = User.create(username: "Valentino", password: "password")
vlad = User.create(username: "Vlad", password: "password")
vladimir = User.create(username: "Vladimir", password: "password")
tyrell = User.create(username: "Tyrell", password: "password")
monarch = User.create(username: "Monarch", password: "password")
gustavo = User.create(username: "Gustavo", password: "password")

Job.destroy_all
job1 = Job.create(
	title: "Senior VP of Technology",
	jobtype: "full-time",
	salary:	999999,
  location: "Worldwide",
	description: "E Corp, known to Elliot by the derogatory name Evil Corp, is one of the largest multi-national conglomerates in the world. Among their enterprises, they manufacture computers, phones, and tablets, and maintain a banking and consumer credit division. According to Mr. Robot, the company owns 70% of the global consumer credit industry, which is why fsociety has targeted them, and why Mr. Robot recruited Elliot to help them hack into their network.",
  employer_id: tyrell.id,
  logo_url: "https://m.popkey.co/452923/4M5rR.gif"
	)

job2 = Job.create(
	title: "Chef",
	jobtype: "part-time",
	salary:	50000000,
  location: "12000 – 12100 Coors Rd SW, Albuquerque NM, 87045",
	description: "The finest ingredients are brought together with love and care, then slow cooked to perfection. Yes, the old ways are still best at Los Pollos Hermanos. But don't take my word for it. One taste, and you'll know.",
  employer_id: gustavo.id,
  logo_url: "http://vignette2.wikia.nocookie.net/breakingbad/images/5/5c/Los_Pollos.png/revision/latest?cb=20130713042010"
	)

job3 = Job.create(
	title: "Henchman",
	jobtype: "intern",
	salary:	0,
  location: "Floating Cocoon",
	description: "The Fluttering Horde are supporting characters of the Adult Swim program The Venture Bros. The Horde are the henchmen of The Monarch and Dr. Mrs. The Monarch and were created when The Monarch first began arching Doctor Venture.\nThe Horde is made up of many henchmen, in particular recurring characters like 21 and 24. The Horde wear identical yellow butterfly-like suits, and aside from #21, #24, #1, #86, #87 and, a wingless recruit in the first episode named Speedy, are virtually indistinguishable.",
  employer_id: monarch.id,
  logo_url: "https://img1.etsystatic.com/013/0/7192588/il_fullxfull.435146537_ogcl.jpg"
	)
