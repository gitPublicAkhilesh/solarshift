import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './DraggableFounder.css';

const DraggableFounder = () => {
  const { language } = useLanguage();
  const [position, setPosition] = useState(() => {
    // Load saved position from localStorage
    const saved = localStorage.getItem('founderButtonPosition');
    return saved ? JSON.parse(saved) : { x: 20, y: window.innerHeight - 140 };
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const founderRef = useRef(null);

  // Save position to localStorage
  useEffect(() => {
    localStorage.setItem('founderButtonPosition', JSON.stringify(position));
  }, [position]);

  // Handle mouse down
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setHasMoved(false);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  // Handle touch start
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setHasMoved(false);
    const touch = e.touches[0];
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    });
  };

  // Handle mouse move
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    // Check if actually moved
    if (Math.abs(newX - position.x) > 5 || Math.abs(newY - position.y) > 5) {
      setHasMoved(true);
    }
    
    // Keep within viewport bounds
    const maxX = window.innerWidth - 80;
    const maxY = window.innerHeight - 80;
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    const newX = touch.clientX - dragStart.x;
    const newY = touch.clientY - dragStart.y;
    
    // Check if actually moved
    if (Math.abs(newX - position.x) > 5 || Math.abs(newY - position.y) > 5) {
      setHasMoved(true);
    }
    
    // Keep within viewport bounds
    const maxX = window.innerWidth - 80;
    const maxY = window.innerHeight - 80;
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  };

  // Handle mouse/touch up
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Handle click (only if not dragged)
  const handleClick = () => {
    if (hasMoved) return; // Don't trigger click if dragged
    
    // Open WhatsApp
    const message = language === 'hi' 
      ? 'नमस्ते! मैं संस्थापक से बात करना चाहता/चाहती हूं।'
      : 'Hello! I would like to talk to the founder.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918591411591?text=${encodedMessage}`, '_blank');
  };

  // Add global event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleDragEnd);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleDragEnd);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleDragEnd);
      };
    }
  }, [isDragging, dragStart, position]);

  const labelText = language === 'hi' ? 'संस्थापक से बात करें' : 'Talk to Founder';

  return (
    <div
      ref={founderRef}
      className={`draggable-founder ${isDragging ? 'dragging' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
    >
      <div className="founder-photo-wrapper">
        <img 
          src="/founder-photo.png" 
          alt="Founder - Agri Solar Solution" 
          className="founder-photo"
          draggable="false"
        />
      </div>
      <span className="founder-label">{labelText}</span>
    </div>
  );
};

export default DraggableFounder;
