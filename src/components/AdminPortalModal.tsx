import React, { useState } from 'react';
import { Shield, Key, CheckCircle, ArrowRight, X, Lock } from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminPortalModal({ isOpen, onClose }: AdminPortalModalProps) {
  const [passkey, setPasskey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey.trim().toLowerCase() === 'legacy2026') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleQuickFill = () => {
    setPasskey('legacy2026');
    setIsAuthenticated(true);
    setError(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#0F1012] border border-[#2D3139] rounded-2xl p-6 sm:p-8 shadow-2xl text-stone-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-100 rounded-lg hover:bg-stone-800/50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isAuthenticated ? (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-light tracking-tight text-white">Trust & Estate Officer Portal</h3>
                <p className="text-xs text-stone-400 font-mono">Restricted Horizon Governance Access</p>
              </div>
            </div>

            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-400 mb-2">
                  Family Master Key / Passkey
                </label>
                <div className="relative">
                  <Key className="w-4 h-4 absolute left-3 top-3 text-stone-500" />
                  <input
                    type="password"
                    value={passkey}
                    onChange={(e) => setPasskey(e.target.value)}
                    placeholder="Enter passkey..."
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-900/60 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500 font-mono text-sm"
                  />
                </div>
                {error && (
                  <p className="text-xs text-red-400 mt-2 font-mono">Invalid estate passkey. Try: legacy2026</p>
                )}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-medium rounded-xl text-sm transition-all"
                >
                  Verify Key
                </button>
                <button
                  type="button"
                  onClick={handleQuickFill}
                  className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 border border-amber-500/30 text-amber-400 text-xs font-mono rounded-xl transition-all"
                >
                  ⚡ Auto-Fill Demo Passkey
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-emerald-400 border-b border-stone-800 pb-4">
              <CheckCircle className="w-6 h-6" />
              <div>
                <h4 className="text-base font-medium text-white">Estate Officer Authenticated</h4>
                <p className="text-xs text-stone-400 font-mono">Passkey: legacy2026 • Clearance Level: Trustee</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-left font-mono text-xs">
              <div className="p-3 bg-stone-900/50 rounded-xl border border-stone-800">
                <span className="text-stone-500 block uppercase">Trust Balance</span>
                <span className="text-stone-100 font-semibold text-sm">$780,000.00</span>
              </div>
              <div className="p-3 bg-stone-900/50 rounded-xl border border-stone-800">
                <span className="text-stone-500 block uppercase">Horizon Reserve</span>
                <span className="text-amber-400 font-semibold text-sm">3 Endowments</span>
              </div>
              <div className="p-3 bg-stone-900/50 rounded-xl border border-stone-800">
                <span className="text-stone-500 block uppercase">Pending Chores</span>
                <span className="text-stone-100 font-semibold text-sm">5 Verified</span>
              </div>
              <div className="p-3 bg-stone-900/50 rounded-xl border border-stone-800">
                <span className="text-stone-500 block uppercase">RLS Security</span>
                <span className="text-emerald-400 font-semibold text-sm">ACTIVE</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsAuthenticated(false);
                setPasskey('');
                onClose();
              }}
              className="w-full py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-mono uppercase tracking-wider transition-colors"
            >
              Exit Estate Officer Session
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
