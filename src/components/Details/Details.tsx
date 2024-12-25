import { motion } from 'framer-motion';
import { FaPlusCircle } from "react-icons/fa";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import { Sparkles, Users, Book, Globe } from 'lucide-react';

const statsData = [
  { icon: <Users className="w-6 h-6" />, value: "50K+", label: "Active Users" },
  { icon: <Book className="w-6 h-6" />, value: "920+", label: "Learning Models" },
  { icon: <Globe className="w-6 h-6" />, value: "15+", label: "Languages" },
];

const teamMembers = [
  { image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
  { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" },
  { image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150" },
  { image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" },
];

function Details() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-white to-gray-50 font-plus-jakarta"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-8 cursor-pointer"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
            </motion.div>
            <span className="text-sm font-semibold">Revolutionizing Education</span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Transform Education with{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-blue-600 inline-block"
            >
              Zortus
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Break down language barriers and deliver personalized learning experiences
            with our AI-powered educational platform supporting multiple Indian languages.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)"
              }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <motion.div 
                initial={{ rotate: -10 }}
                whileHover={{ rotate: 0, scale: 1.1 }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4"
              >
                {stat.icon}
              </motion.div>
              <motion.h3 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="text-4xl font-bold text-gray-900 mb-2"
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Video and Team Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-2xl relative group"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <Player playsInline>
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 0.1 }}
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200')] bg-cover bg-center"
            />
            
            <div className="relative z-10">
              <motion.h2 
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="text-3xl font-bold mb-6"
              >
                Join Our Growing Community
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-blue-100 mb-8"
              >
                Connect with educators and learners from across India who are already
                transforming education with Zortus.
              </motion.p>
              
              <div className="flex items-center gap-3">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, x: -20 }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="relative"
                  >
                    <img
                      src={member.image}
                      alt={`Team member ${index + 1}`}
                      className="w-12 h-12 rounded-full border-2 border-white object-cover"
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors"
                >
                  <FaPlusCircle className="text-white text-xl" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Details;