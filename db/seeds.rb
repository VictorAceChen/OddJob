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

tyrell = User.create(
  username: "Tyrell",
  password: "password",
  logo_url: "https://m.popkey.co/452923/4M5rR.gif"
  )

monarch = User.create(
  username: "Monarch",
  password: "password",
  logo_url: "https://img1.etsystatic.com/013/0/7192588/il_fullxfull.435146537_ogcl.jpg"
  )

gustavo = User.create(
  username: "Gustavo",
  password: "password",
  logo_url: "http://vignette2.wikia.nocookie.net/breakingbad/images/5/5c/Los_Pollos.png/revision/latest?cb=20130713042010"
	)

wesker = User.create(
  username: "Wesker",
  password: "password",
  logo_url: "https://media3.giphy.com/media/Rjp1itgZHzGk8/200.gif"
	)

t1000 = User.create(
  username: "t1000",
  password: "password",
  logo_url: "http://vignette1.wikia.nocookie.net/villains/images/0/05/Skynet_Logo.jpg/revision/latest?cb=20130327183511"
	)

Job.destroy_all
job1 = Job.create(
	title: "Senior VP of Technology",
	jobtype: "full-time",
	salary:	999999,
  location: "Worldwide",
	description: "E Corp, known to Elliot by the derogatory name Evil Corp, is one of the largest multi-national conglomerates in the world. Among their enterprises, they manufacture computers, phones, and tablets, and maintain a banking and consumer credit division. According to Mr. Robot, the company owns 70% of the global consumer credit industry, which is why fsociety has targeted them, and why Mr. Robot recruited Elliot to help them hack into their network.",
  employer_id: tyrell.id
	)

job2 = Job.create(
	title: "Chef",
	jobtype: "part-time",
	salary:	50000000,
  location: "12000 – 12100 Coors Rd SW, Albuquerque NM, 87045",
	description: "The finest ingredients are brought together with love and care, then slow cooked to perfection. Yes, the old ways are still best at Los Pollos Hermanos. But don't take my word for it. One taste, and you'll know.",
  employer_id: gustavo.id
  )

job3 = Job.create(
	title: "Henchman",
	jobtype: "intern",
	salary:	0,
  location: "Floating Cocoon",
	description: "The Fluttering Horde are supporting characters of the Adult Swim program The Venture Bros. The Horde are the henchmen of The Monarch and Dr. Mrs. The Monarch and were created when The Monarch first began arching Doctor Venture.\nThe Horde is made up of many henchmen, in particular recurring characters like 21 and 24. The Horde wear identical yellow butterfly-like suits, and aside from #21, #24, #1, #86, #87 and, a wingless recruit in the first episode named Speedy, are virtually indistinguishable.",
  employer_id: monarch.id
  )

job3 = Job.create(
	title: "Moppet #3",
	jobtype: "full-time",
	salary:	0,
  location: "Floating Cocoon",
	description: "The Fluttering Horde are supporting characters of the Adult Swim program The Venture Bros. The Horde are the henchmen of The Monarch and Dr. Mrs. The Monarch and were created when The Monarch first began arching Doctor Venture.\nThe Horde is made up of many henchmen, in particular recurring characters like 21 and 24. The Horde wear identical yellow butterfly-like suits, and aside from #21, #24, #1, #86, #87 and, a wingless recruit in the first episode named Speedy, are virtually indistinguishable.",
  employer_id: monarch.id
  )

job4 = Job.create(
	title: "Test Subject",
	jobtype: "full-time",
	salary:	100000,
  location: "The Hive",
	description: "Umbrella was a giant conglomerate which operated ruthlessly as a major international player in a number of markets; including pharmaceuticals and medical equipment, as well as top-secret operations utilizing genetic engineering and biological weaponry. The company also had a more benevolent public face for the ignorant masses, producing cosmetics, consumer products, and foods.",
  employer_id: wesker.id
  )

job5 = Job.create(
	title: "Mercenary",
	jobtype: "full-time",
	salary:	500000,
  location: "The Hive",
	description: "Umbrella was a giant conglomerate which operated ruthlessly as a major international player in a number of markets; including pharmaceuticals and medical equipment, as well as top-secret operations utilizing genetic engineering and biological weaponry. The company also had a more benevolent public face for the ignorant masses, producing cosmetics, consumer products, and foods.",
  employer_id: wesker.id
  )

job6 = Job.create(
	title: "Programmer",
	jobtype: "full-time",
	salary:	500000,
  location: "Skynet Central",
	description: "Skynet, or Titan, is a highly advanced artificial intelligence. Once it became self-aware, it saw humanity as a threat to its existence and decided to trigger the nuclear holocaust Judgment Day and deploy an army of Terminators against humanity. It is the main antagonist of the Terminator Franchise.",
  employer_id: t1000.id
  )

job7 = Job.create(
	title: "Test Subject",
	jobtype: "full-time",
	salary:	500000,
  location: "Skynet Central",
	description: "Skynet, or Titan, is a highly advanced artificial intelligence. Once it became self-aware, it saw humanity as a threat to its existence and decided to trigger the nuclear holocaust Judgment Day and deploy an army of Terminators against humanity. It is the main antagonist of the Terminator Franchise.",
  employer_id: t1000.id
  )

job8 = Job.create(
	title: "Punching Bag",
	jobtype: "part-time",
	salary:	500,
  location: "Worldwide",
	description: "E Corp, known to Elliot by the derogatory name Evil Corp, is one of the largest multi-national conglomerates in the world. Among their enterprises, they manufacture computers, phones, and tablets, and maintain a banking and consumer credit division. According to Mr. Robot, the company owns 70% of the global consumer credit industry, which is why fsociety has targeted them, and why Mr. Robot recruited Elliot to help them hack into their network.",
  employer_id: tyrell.id
	)

job9 = Job.create(
	title: "Programmer",
	jobtype: "full-time",
	salary:	500000,
  location: "Worldwide",
	description: "E Corp, known to Elliot by the derogatory name Evil Corp, is one of the largest multi-national conglomerates in the world. Among their enterprises, they manufacture computers, phones, and tablets, and maintain a banking and consumer credit division. According to Mr. Robot, the company owns 70% of the global consumer credit industry, which is why fsociety has targeted them, and why Mr. Robot recruited Elliot to help them hack into their network.",
  employer_id: tyrell.id
	)


job10 = Job.create(
	title: "Enforcer",
	jobtype: "full-time",
	salary:	400000,
  location: "12000 – 12100 Coors Rd SW, Albuquerque NM, 87045",
	description: "The finest ingredients are brought together with love and care, then slow cooked to perfection. Yes, the old ways are still best at Los Pollos Hermanos. But don't take my word for it. One taste, and you'll know.",
  employer_id: gustavo.id
  )

MyJob.destroy_all
my_job1 = MyJob.create(user_id: guest.id,job_id: job1.id, status: "-")
my_job2 = MyJob.create(user_id: guest.id,job_id: job2.id, status: "-")
my_job3 = MyJob.create(user_id: guest.id,job_id: job3.id, status: "hired")
my_job4 = MyJob.create(user_id: guest.id,job_id: job4.id, status: "applied")
my_job5 = MyJob.create(user_id: guest.id,job_id: job5.id, status: "applied")
my_job6 = MyJob.create(user_id: guest.id,job_id: job6.id, status: "offered")
my_job7 = MyJob.create(user_id: guest.id,job_id: job7.id, status: "interviewing")
my_job8 = MyJob.create(user_id: guest.id,job_id: job8.id, status: "interviewing")
my_job9 = MyJob.create(user_id: guest.id,job_id: job9.id, status: "offered")
my_job10 = MyJob.create(user_id: guest.id,job_id: job10.id, status: "offered")
