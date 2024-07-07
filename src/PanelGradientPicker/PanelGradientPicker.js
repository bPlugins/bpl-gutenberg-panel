/* eslint-disable no-unused-vars */
import React from 'react';
import { Dropdown, GradientPicker } from "@wordpress/components";
import { useSelect } from '@wordpress/data';
import { Label } from '../Label/Label';

export const PanelGradientPicker = ({ value, onChange = () => { }, label }) => {
  const themeColors = useSelect('core/block-editor').getSettings().gradients;
  const id = Math.floor(Math.random() * 9999999);
  const gradientValue = "linear-gradient(to bottom, #D8613C 0%, #F9F9F9 100%)";
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <style>{`
        .gradientPicker-${id}{
          ${value ? `background: ${value};` : `
          background-image: linear-gradient(
            45deg,
            #d5d8dc 25%,
            transparent 0,
            transparent 75%,
            #d5d8dc 0,
            #d5d8dc
          ),
          linear-gradient(
            45deg,
            #d5d8dc 25%,
            transparent 0,
            transparent 75%,
            #d5d8dc 0,
            #d5d8dc
          );
          background-size: 16px 16px;
          background-position: 0 0, calc(16px / 2) calc(16px / 2);
          `
        }
      `}</style>
      {
        label ? <Label>{label}</Label>:""
      }
      <Dropdown
        className="my-container-class-name"
        contentClassName="my-popover-content-classname"
        renderToggle={({ isOpen, onToggle, onClose }) => (
          <div
            className={`gradientPicker-${id}`}
            style={{
              height: '30px',
              width: '30px',
              borderRadius: '50%',
              cursor: 'pointer',
              border: '1px solid #ccc',
            }}
            onClick={onToggle}
            aria-expanded={isOpen}
          ></div>
        )}
        renderContent={({ isOpen, onToggle, onClose }) => (
          <div style={{ marginTop: '10px' }}>
            <GradientPicker
              value={value || gradientValue}
              onChange={(value) => onChange(value)}
              gradients={themeColors}
            />
            <div onClick={onClose}></div>
          </div>
        )}
      />
    </div>
  );
};